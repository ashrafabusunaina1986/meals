'use client'
import React, { useContext } from 'react'
import CartIcon from '../cart/CartIcon'
import styles from './headercartbutton.module.css'
import { Cart_Context } from '@/context/cartContext/CartContex'

const HeaderCartButton = (props) => {
  const co=useContext(Cart_Context)

  const numberCart=co.items.reduce((curNumber,item)=>{
    return curNumber+item.amount
  },0)
  return (
    <button className={styles.container} onClick={props.onClick}>
        <span className={styles.icon}><CartIcon/></span>
        <span>Your carts</span>
        <span className={styles.badge}>{numberCart}</span>
    </button>
  )
}

export default HeaderCartButton