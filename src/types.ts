export interface Type {
    id:string
    name:string
}

export async function getTypes(){
    let response = await fetch('http://localhost:5081/Type/Get')
    let listTypes:Type[] = await response.json()       
    return listTypes
}

export function addListTypes(listTypes: Type[]){
    let typesHtmlList = document.querySelector(".menu-nav-list")!;
    typesHtmlList.innerHTML += `
    <li class="menu-nav-item">
        <button class="menu-nav-button classic-button">Все</button>
    </li>`
    listTypes.forEach(type => {
        typesHtmlList.innerHTML += `
            <li class="menu-nav-item">
                <button class="menu-nav-button classic-button">${type.name}</button>
            </li>
        `
    })
}

