'use client';

import type { Resource, Performance, QuizQuestion } from '@/lib/types';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { seedQuizQuestions } from '@/lib/seed-data';
import { mathQuizQuestions } from '@/lib/math-quiz-data';
import { m8aQuizQuestions } from '@/lib/m8a-rules-regs-data';

// A custom hook to synchronize state with localStorage
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
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


const m8Resource: Resource = {
  id: 'm8-cis-question-bank',
  name: 'M8 Collective Investment Schemes',
  questions: seedQuizQuestions,
  createdAt: '2024-01-01T00:00:00.000Z',
};

const mathResource: Resource = {
  id: 'just-math-stuff',
  name: 'Just Math Stuff',
  questions: mathQuizQuestions,
  createdAt: '2024-01-01T00:00:00.000Z',
};

const m8aResource: Resource = {
  id: 'm8a-rules-regs-data',
  name: 'M8A Rules & Regulations',
  questions: m8aQuizQuestions,
  createdAt: '2024-01-01T00:00:00.000Z',
};


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
  const [resources, setResources] = useLocalStorage<Resource[]>('reviewmate-resources', [m8Resource, mathResource, m8aResource]);
  const [performance, setPerformance] = useLocalStorage<Performance>('reviewmate-performance', {});
  
  useEffect(() => {
    // This effect ensures the default quizzes in localStorage are always up-to-date with the latest questions from the codebase.
    setResources(prevResources => {
      const newResources = [...prevResources];
      
      // Update M8 Quiz
      const m8Index = newResources.findIndex(r => r.id === m8Resource.id);
      if (m8Index !== -1) {
        if (newResources[m8Index].questions.length !== seedQuizQuestions.length) {
          newResources[m8Index].questions = seedQuizQuestions;
        }
      } else {
        newResources.push(m8Resource);
      }
      
      // Update Math Quiz
      const mathIndex = newResources.findIndex(r => r.id === mathResource.id);
      if (mathIndex !== -1) {
         if (newResources[mathIndex].questions.length !== mathQuizQuestions.length) {
          newResources[mathIndex].questions = mathQuizQuestions;
        }
      } else {
        newResources.push(mathResource);
      }

      // Update M8A Quiz
      const m8aIndex = newResources.findIndex(r => r.id === m8aResource.id);
      if (m8aIndex !== -1) {
          if (newResources[m8aIndex].questions.length !== m8aQuizQuestions.length) {
            newResources[m8aIndex].questions = m8aQuizQuestions;
          }
      } else {
        newResources.push(m8aResource);
      }


      return newResources;
    });
  }, []); // Run only once on mount

  const addResource = (resourceData: Omit<Resource, 'id' | 'createdAt'>) => {
    const newResource: Resource = {
      ...resourceData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setResources(prevResources => [...prevResources, newResource]);
  };

  const deleteResource = (resourceId: string) => {
    // Prevent deleting the default quizzes. The UI also hides the delete button for them.
    if (resourceId === m8Resource.id || resourceId === mathResource.id || resourceId === m8aResource.id) {
      return; 
    }
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

  const value = {
    resources,
    performance,
    addResource,
    deleteResource,
    updatePerformance,
    getResourceById,
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
