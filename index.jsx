import React from 'react'
import { useDispatch } from 'react-redux'
import s from './style.module.css'
import { addAction } from '../../store/reducer/productsReducer'


export default function AddProdukt() {
    const dispatch = useDispatch()

const submit = event => {
    event.preventDefault()
    const {title, price} = event.target;
    
    const newProduct = {
      title: title.value,
      price: price.value
    };
    dispatch(addAction(newProduct))
   
    event.target.reset()
}

  return (
 <div className={s.product}>
   <form onSubmit={submit}>
    <input type="text" placeholder='Nazvanie' name='title' />
    <input type="text" placeholder='Tsena' name='price' />
    <button className={s.item}>DOBAVIT</button>
   </form>
 </div>
  )
}
