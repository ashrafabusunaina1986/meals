'use client'
import React, { createContext, useState } from 'react'

export const Add_Context = createContext({
    meal:{},
    isActive:false
})



const Addm = ({ children }) => {

    const addMeal=(meal)=>{

    }
    return (
        <Add_Context.Provider>
            {children}
        </Add_Context.Provider>
    )
}

export default Addm