import './style.css'
import {addListTypes, getTypes } from './types.ts'
import { renserCartList } from './cart.ts'
import { getPositions, renderListPositions, clickСheckType} from './positions.ts'

let listTypes =await getTypes()
let listPositions = await getPositions()
let cartButton = document.querySelector(".cart-button") as HTMLElement
let popup = document.querySelector("#popup")as HTMLElement
let closeCartButton = document.querySelector("#close-popup")as HTMLElement
addListTypes(listTypes)
renderListPositions("Все", listPositions)
clickСheckType(listPositions)
renserCartList(cartButton, closeCartButton, popup)


