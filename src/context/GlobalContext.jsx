'use client'
import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
 
    return (
        <GlobalStateContext.Provider value={{ loading, setLoading}}>
            {children}
        </GlobalStateContext.Provider>
    );
}