import Button from '@/components/UI/button/Button'
import Input from '@/components/UI/input/Input'
import styles from './addmeal.module.css'
import React from 'react'
import Modal from '@/components/UI/modal/Modal'

const AddMeal = () => {
  return (
    <div>
      <div className={styles.backdrop} />
      <form onSubmit={''} className={styles.form}>
        <div>
          <h1>Add meal</h1>
        </div>
        <Input input={{ id: 'name', type: 'text', value: '' ,placeholder:'Name'}} />
        <Input input={{ id: 'description', type: 'text', value: '' ,placeholder:'Description'}} />
        <Input input={{ id: 'price', type: 'number', value: '',placeholder:'price'}}  />
        <div className={styles.action}>
          <Button className={styles.cancel}>Cancel</Button>
          <Button className={styles.add}>Add</Button>
        </div>

      </form>
    </div>

  )
}

export default AddMeal