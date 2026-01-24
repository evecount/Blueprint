'use client';

import type { Resource, Performance, QuizQuestion } from '@/lib/types';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { seedResources } from '@/lib/seed-data';

// A custom hook to synchronize state with localStorage
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    // This effect runs only on the client, after hydration.
    try {
      const item = window.localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item) : null;

      const hasSeedData = Array.isArray(initialValue) && initialValue.length > 0;
      const storageIsEmpty = !parsedItem || (Array.isArray(parsedItem) && parsedItem.length === 0);

      // If storage is empty but we have seed data, it means we need to initialize storage.
      if (storageIsEmpty && hasSeedData) {
        setStoredValue(initialValue);
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      } else if (parsedItem) {
        setStoredValue(parsedItem);
      }
      // If storage is empty and there's no seed data, it will correctly remain as an empty array.
      
    } catch (error) {
      console.error(error);
      // If there's an error, we'll just stick with the initial value.
      setStoredValue(initialValue);
    }
    // We only want this to run once on mount. `initialValue` is included in case seed data changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

interface AppContextType {
  resources: Resource[];
  performance: Performance;
  addResource: (resource: Omit<Resource, 'id' | 'createdAt'>) => void;
  deleteResource: (resourceId: string) => void;
  updatePerformance: (topic: string, score: number, total: number) => void;
  getResourceById: (id: string) => Resource | undefined;
  addQuestionToResource: (resourceId: string, question: QuizQuestion) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [resources, setResources] = useLocalStorage<Resource[]>('reviewmate-resources', seedResources);
  const [performance, setPerformance] = useLocalStorage<Performance>('reviewmate-performance', {});
  
  const addResource = (resourceData: Omit<Resource, 'id' | 'createdAt'>) => {
    const newResource: Resource = {
      ...resourceData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setResources(prevResources => [...prevResources, newResource]);
  };

  const deleteResource = (resourceId: string) => {
    setResources(resources.filter((r) => r.id !== resourceId));
  };
  
  const updatePerformance = (topic: string, score: number, total: number) => {
    setPerformance(prevPerformance => {
        const newPerformance = { ...prevPerformance };
        if (!newPerformance[topic]) {
          newPerformance[topic] = { correct: 0, total: 0 };
        }
        newPerformance[topic].correct += score;
        newPerformance[topic].total += total;
        return newPerformance;
    });
  };
  
  const getResourceById = (id: string) => {
    return resources.find((r) => r.id === id);
  };

  const addQuestionToResource = (resourceId: string, newQuestion: QuizQuestion) => {
    setResources(prevResources =>
      prevResources.map(resource => {
        if (resource.id === resourceId) {
          // Create a new question object to be safe, although newQuestion should be fine
          const questionToAdd = { ...newQuestion };
          return {
            ...resource,
            questions: [...resource.questions, questionToAdd],
          };
        }
        return resource;
      })
    );
  };

  const value = {
    resources,
    performance,
    addResource,
    deleteResource,
    updatePerformance,
    getResourceById,
    addQuestionToResource,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
