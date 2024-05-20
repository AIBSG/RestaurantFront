import { Type } from "./types"

export interface Position{
    id:string,
    image:string,
    name:string,
    price:number,
    type:Type
}
export async function getPositions() {
    let response = await fetch('http://localhost:5081/Position/Get');
    let listPositions:Position[] = await response.json();
    return listPositions;
}

export function renderListPositions(typeName: string, listTypes: Position[]){
    let menuList = document.querySelector(".menu-list")!
    let condition: boolean = false
    menuList.innerHTML=``
    if(typeName == "Все"){
        condition = true
    }

    listTypes.forEach(position => {
        if(position.type.name == typeName || condition){
            menuList.innerHTML +=`
            <li class="menu-item">
                <img class="item-image" src=${position.image} ></img>
                <h3 class="name">${position.name}</h3>
                <p class="price">${position.price} руб</p>
                <button class="buy-button">Купить</button>
            </li>`
        }
    });
}

export function clickСheckType(listPositions: Position[]){
    const ulElement = document.querySelector('.menu-nav-list') as HTMLElement | null;

if (ulElement) {
  ulElement.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement;
    console.log(target.tagName)
    if (target && target.tagName == "BUTTON") {
       
      renderListPositions(target.innerHTML, listPositions)
    }
  });
}

}
