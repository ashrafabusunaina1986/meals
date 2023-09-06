'use client'
import AddMeal from '@/components/meals/addmael/AddMeal'
import { Add_Context } from '@/context/addmeal/Addm'
import React, { useContext, useEffect, useState } from 'react'

const Layout = ({children}) => {
    const [meals,setMeals]=useState([])
    const acx=useContext(Add_Context)
    const [meal,setMeal]=useState({})
    const addMeal=(e)=>{
        e.preventDefault()
        setMeals([
            ...meals,{
                id:meals.length,
                name:meal.name,
                discription:meal.description,
                price:Number(meal.price)
            }
        ])
        
        acx.toggle()
    }
    useEffect(()=>{
        acx.setMeals(meals)
    })
  return (
    <div>
        {acx.isActive && <AddMeal onCancel={acx.oggle} addMeal={addMeal} setMeal={setMeal}/>}
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout