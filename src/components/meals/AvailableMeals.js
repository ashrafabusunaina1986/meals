'use client'
import React, { useContext, useRef, useState } from 'react'
import Card from '../UI/card/Card';
import MealItem from './mealitem/MealItem';
import styles from './availabemeals.module.css'
import Button from '../UI/button/Button';
import { Add_Context } from '@/context/addmeal/Addm';
import AddMeal from './addmael/AddMeal';
import DUMMY_MEALS from './../../../public/data.json'
import axios from 'axios';


const AvailableMeals = (props) => {
    const [meal, setMeal] = useState({})
    const [isActive, setIsActive] = useState(false)
    const [error,setError]=useState('')
    const cancel = () => {
        setIsActive(false)
    }
    const ok = () => {
        setIsActive(true)
    }
    const addMeal = async (e) => {
        e.preventDefault()
        if (meal.name.trim().length >3 && meal.description.trim().length >3 && meal.price> 0) {
            const meal1 = {
                id: `m${DUMMY_MEALS.length + 1}`,
                name: meal.name,
                description: meal.description,
                price: Number(meal.price)
            }
            axios.post('/api/addmeal',meal1)
            setError('')
            setIsActive(false)
        } else {
            setError('enter all inputs')
            setIsActive(true)
        }

        
    }

    return (
        <section className={styles.meals}>
            <Card>
                {isActive?<AddMeal onCancel={cancel} addMeal={addMeal} error={error} setMeal={setMeal} />:'' }
                {!isActive && <Button onClick={ok} >Add Meal</Button> }
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