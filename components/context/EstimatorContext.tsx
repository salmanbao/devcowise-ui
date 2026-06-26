'use client';

import { createContext, useContext, useState, useCallback, useMemo, ReactNode, useEffect } from 'react';

interface EstimatorContextType {
  isOpen: boolean;
  openEstimator: () => void;
  closeEstimator: () => void;
}

const EstimatorContext = createContext<EstimatorContextType | null>(null);

// Module-level state to survive component unmounting/remounting
let estimatorState = false;
let listeners: Set<() => void> = new Set();

function notifyListeners() {
  listeners.forEach(listener => listener());
}

export function EstimatorProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(estimatorState);

  // Subscribe to state changes
  useEffect(() => {
    const listener = () => {
      setIsOpen(estimatorState);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const openEstimator = useCallback(() => {
    estimatorState = true;
    notifyListeners();
  }, []);

  const closeEstimator = useCallback(() => {
    estimatorState = false;
    notifyListeners();
  }, []);

  const value = useMemo(
    () => ({ isOpen, openEstimator, closeEstimator }),
    [isOpen, openEstimator, closeEstimator]
  );

  return (
    <EstimatorContext.Provider value={value}>
      {children}
    </EstimatorContext.Provider>
  );
}

export function useEstimator() {
  const context = useContext(EstimatorContext);
  if (!context) {
    throw new Error('useEstimator must be used within EstimatorProvider');
  }
  return context;
}
