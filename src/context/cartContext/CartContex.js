import React, { createContext, useReducer } from 'react'

export const Cart_Context=createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

const defaultCarts={
    items:[],
    totalAmount:0
}
const CartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updateItems=state.items.concat(action.item)
        const updateTotalAmount=state.totalAmount+action.item.price*action.item.amount
        return{
            items:updateItems,
            totalAmount:updateTotalAmount
        }
    }
    if(action.type==='REMOVE'){
        
    }
    return defaultCarts
}

const CartContex = ({children}) => {
    const [cartsState,dispatchCartAction]=useReducer(CartReducer,defaultCarts)

    const addItem=item=>{
        dispatchCartAction({type:'ADD',item:item})
    }
    const removeItem=id=>{
        dispatchCartAction({type:"REMOVE",id:id})
    }

    const cartObject={
        items:cartsState.items,
        totalAmount:cartsState.totalAmount,
        addItem:addItem,
        removeItem:removeItem
    }
  
  return (
    <Cart_Context.Provider value={cartObject}>
        {children}
    </Cart_Context.Provider>
  )
}

export default CartContex