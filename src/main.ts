import './style.css'
import {addListTypes, getTypes } from './types.ts'
import { getPositions, renderListPositions, clickСheckType} from './positions.ts'
import { addInCart, renderCartList, reduceAmountInCart, increaseAmountInCart } from './cart.ts'


let listTypes = await getTypes()
let listPositions = await getPositions()
let cartList = document.querySelector('.cart-list')!
addListTypes(listTypes)
renderListPositions("Все", listPositions)
clickСheckType(listPositions)
renderCartList(cartList)
addInCart(cartList)
reduceAmountInCart(cartList)
increaseAmountInCart(cartList)


