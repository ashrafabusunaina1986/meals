'use client'
import React, { useContext, useState } from 'react'
import Card from '../UI/card/Card';
import MealItem from './mealitem/MealItem';
import styles from './availabemeals.module.css'
import Button from '../UI/button/Button';
import { Add_Context } from '@/context/addmeal/Addm';
import AddMeal from './addmael/AddMeal';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = (props) => {
    const [meal,setMeal]=useState({})
    const [isActive,setIsActive]=useState(false)
    const cancel=()=>{
        setIsActive(false)
    }
    const ok=()=>{
        setIsActive(true)
    }
    const addMeal=(e)=>{
        e.preventDefault()
        DUMMY_MEALS.push({
            id:`m${DUMMY_MEALS.length+1}`,
            name:meal.name,
            description:meal.description,
            price:Number(meal.price)
        })
        setIsActive(false)
    }

    return (
        <section className={styles.meals}>
            <Card>
                {isActive ? <AddMeal onCancel={cancel} addMeal={addMeal} setMeal={setMeal} /> : ''}
                {!isActive ? <Button onClick={ok} >Add Meal</Button> : ''}
                <ul>
                    {
                        DUMMY_MEALS.map((meal) => {
                            return <MealItem key={meal.id} id={meal.id} name={meal.name}
                                price={meal.price} description={meal.description} />
                        })
                    }
                </ul>

            </Card>

        </section>

    )
}

export default AvailableMeals