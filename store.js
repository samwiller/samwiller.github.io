if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    const addButtons = document.getElementsByClassName('addButton');
    for(let button of addButtons) {
        button.addEventListener('click', addToCart)
    }
}

function addToCart(event) {
    let button = event.target;
    let shopItem = button.parentElement.parentElement
    let itemTitle = shopItem.getElementsByClassName('item-title')[0].innerText
    let itemPrice = shopItem.getElementsByClassName('item-price')[0].innerText
    let itemImage = shopItem.getElementsByClassName('item-image')[0].src


    console.log(itemTitle, itemPrice, itemImage);
}