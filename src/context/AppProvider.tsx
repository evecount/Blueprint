'use client';

import type { Resource, Performance, QuizQuestion } from '@/lib/types';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// A custom hook to synchronize state with localStorage
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
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

  useEffect(() => {
    // This effect ensures that the state is updated on the client side
    // after the initial server render.
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  return [storedValue, setValue];
}

interface AppContextType {
  resources: Resource[];
  performance: Performance;
  addResource: (resource: Omit<Resource, 'id' | 'createdAt'>) => void;
  deleteResource: (resourceId: string) => void;
  updatePerformance: (topic: string, score: number, total: number) => void;
  getResourceById: (id: string) => Resource | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [resources, setResources] = useLocalStorage<Resource[]>('studybuddy-resources', []);
  const [performance, setPerformance] = useLocalStorage<Performance>('studybuddy-performance', {});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const addResource = (resourceData: Omit<Resource, 'id' | 'createdAt'>) => {
    const newResource: Resource = {
      ...resourceData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setResources([...resources, newResource]);
  };

  const deleteResource = (resourceId: string) => {
    setResources(resources.filter((r) => r.id !== resourceId));
  };
  
  const updatePerformance = (topic: string, score: number, total: number) => {
    const newPerformance = { ...performance };
    if (!newPerformance[topic]) {
      newPerformance[topic] = { correct: 0, total: 0 };
    }
    newPerformance[topic].correct += score;
    newPerformance[topic].total += total;
    setPerformance(newPerformance);
  };
  
  const getResourceById = (id: string) => {
    return resources.find((r) => r.id === id);
  };

  const value = {
    resources,
    performance,
    addResource,
    deleteResource,
    updatePerformance,
    getResourceById,
  };

  return <AppContext.Provider value={value}>{isClient ? children : null}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
