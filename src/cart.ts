export function renserCartList(openButton:HTMLElement, closeButton:HTMLElement, popup:HTMLElement){
    if (openButton && closeButton && popup){
        openButton.addEventListener('click', () => {
            popup.style.display = 'block'
            console.log('dddd')
        })

        closeButton.addEventListener('click', () => {
            popup.style.display ='none'
        })
    }
}