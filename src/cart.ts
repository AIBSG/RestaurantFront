interface CartEl{
    name:string,
    price:string,
    amount:number
}


export async function renderCartList(cartList:Element) {
    cartList.innerHTML=``
    let keys = Object.keys(localStorage);
    for(let key of keys) {
        let cartElement:CartEl = JSON.parse(localStorage.getItem(key)!)
        cartList.innerHTML+=`
        <li class="cart-list-element">
                        <div class="cart-el-info">
                            <h3 class='name cart-el'>${cartElement.name}</h3>
                            <p class = "price cart-el">${cartElement.price} руб</p>
                        </div>
                        <div class="pos-amount">
                            <button class="minus-button"></button>
                            <span>${cartElement.amount}</span>
                            <button class="plus-button"></button>
                        </div>
                    </li>
        ` 
    }
    renderCartTotal()
}

export async function renderCartTotal() {
    let keys:string[] = Object.keys(localStorage);
    let totalContainer:HTMLElement = document.querySelector(".total-buy-value")!
    let totalResult:number = 0
    for(let key of keys) {
        let element:CartEl = JSON.parse(localStorage.getItem(key)!)
        totalResult += Number(element.price) * element.amount
    }
    totalContainer.textContent = String(totalResult) + "руб"
}

export async function addInCart(cartList:Element) {
    
    document.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement
        if(target.classList.contains("buy-button")){
            console.log(localStorage)
            let name = target.parentNode?.querySelector('.name')!.textContent
            let price = target.parentNode?.querySelector('.price')!.textContent?.split(' ')[0]
            let nowPosition = localStorage.getItem(name!)
            if(nowPosition == null){
                localStorage.setItem(name!, JSON.stringify({name: name, price: price, amount:1} as CartEl))
                console.log(localStorage)
            }else {
                let nowCartEL = JSON.parse(nowPosition) as CartEl
                nowCartEL.amount+=1
                localStorage.removeItem(name!)
                localStorage.setItem(name!, JSON.stringify(nowCartEL))
            }
            renderCartList(cartList)
            renderCartTotal()
        }
    })
}

export async function reduceAmountInCart(cartList:Element) {
    document.addEventListener('click', (event:Event) => {
        const target = event.target as HTMLElement
        if(target.classList.contains("minus-button")){
            console.log("dd")
            const cartListElement = target.closest('.cart-list-element');
            const nameElement = cartListElement!.querySelector('.name');
            const name = nameElement!.textContent;
            let nowCartEl = JSON.parse(localStorage.getItem(name!)!) as CartEl
            if(nowCartEl.amount == 1){
                localStorage.removeItem(name!)
            }
            else{
                nowCartEl.amount-=1
                localStorage.removeItem(name!)
                localStorage.setItem(name!, JSON.stringify(nowCartEl))
            }
            renderCartList(cartList)
            renderCartTotal()
        }
    })
}

export async function increaseAmountInCart(cartList:Element) {
    document.addEventListener('click', (event:Event) => {
        const target = event.target as HTMLElement
        if(target.classList.contains("plus-button")){
            console.log("dd")
            const cartListElement = target.closest('.cart-list-element');
            const nameElement = cartListElement!.querySelector('.name');
            const name = nameElement!.textContent;
            let nowCartEl = JSON.parse(localStorage.getItem(name!)!) as CartEl
            nowCartEl.amount+=1
            localStorage.removeItem(name!)
            localStorage.setItem(name!, JSON.stringify(nowCartEl))
            renderCartList(cartList)
            renderCartTotal()
        }
    })
}

