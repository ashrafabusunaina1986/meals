import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'
import classes from './meal.module.css'

const Meals = () => {
  return (
    <div  className={classes.Meals}>
        <AvailableMeals/>
        <MealsSummary/>
    </div >
  )
}

export default Meals