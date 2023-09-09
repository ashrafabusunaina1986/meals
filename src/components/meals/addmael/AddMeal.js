import Button from '@/components/UI/button/Button'
import Input from '@/components/UI/input/Input'
import styles from './addmeal.module.css'
import React, { useEffect, useState } from 'react'

const AddMeal = (props) => {
  const [meal, setMeal] = useState({
    name: '',
    description: '',
    price: 0
  })
  const change = (e) => {
    const { id, value } = e.target
    setMeal({
      ...meal, [id]: value
    })
  }
  useEffect(()=>{
    props.setMeal(meal)
  },[meal])
  return (
    <div>
      <div className={styles.backdrop} />
      <form  className={styles.form}>
        
        <div>
          <h1>Add meal</h1>
        </div>
        {props.error && <div className={styles.error} >{props.error}</div>}
        <Input input={{ id: 'name', type: 'text', value: `${meal.name}`, placeholder: 'Name'}}  onChange={ change }  />
        <Input input={{ id: 'description', type: 'text', value: `${meal.description}`, placeholder: 'Description'}} onChange= { change }  />
        <Input input={{ id: 'price', type: 'number', value: `${meal.price}`, placeholder: 'price'}} onChange= { change }  />
        <div className={styles.action}>
          <Button className={styles.cancel} onClick={props.onCancel}>Cancel</Button>
          <Button className={styles.add} onClick={props.addMeal}>Add</Button>
        </div>

      </form>
    </div>

  )
}

export default AddMeal