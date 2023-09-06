'use client'
import React, { useContext, useEffect } from 'react'
import classes from './page.module.css'
import Button from '@/components/UI/button/Button'
import { Add_Context } from '@/context/addmeal/Addm'

const Toggle = (props) => {
    const acx=useContext(Add_Context)
    useEffect(()=>{
      console.log(acx.meals)
    },[acx.meals])
  return (
    <div className={classes.button} >
        {!acx.isActive && <Button onClick={acx.toggle} >Add Meal</Button>}
        <div className={classes.meals} ><ul>
            {acx.meals.map(item=>{
                return <li key={item.id}>{item.name}
                  <div>
                    {item.description}
                  </div>
                  <div>
                    {item.price}
                  </div>
                </li>
            })}</ul>
        </div>
    </div>
  )
}

export default Toggle