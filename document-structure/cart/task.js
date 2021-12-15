const btnInc = document.querySelectorAll('.product__quantity-control_inc')
const btnDec = document.querySelectorAll('.product__quantity-control_dec')
const btnAdd = document.querySelectorAll('.product__add')
const cartProducts = document.querySelector('.cart__products')

function incQuantity() {
    
    let quantity = parseInt(this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText)
    quantity = quantity + 1
    this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText = quantity

}

function decQuantity() {

    let quantity = parseInt(this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText)

    if ((quantity - 1) >= 1) {
        quantity = quantity - 1
        this.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText = quantity
    }
}

function productAdd() {
    
    const basketProd = document.querySelectorAll('.cart__product')

    if (cartProducts.querySelector('.cart__product') != null) {

        for (let i = 0; i < basketProd.length; i++) {
            const product = basketProd[i];
            if (product.dataset.id === this.closest('.product').dataset.id) {
                product.querySelector('.cart__product-count').innerText = parseInt(product.querySelector('.cart__product-count').innerText) +
                    parseInt(this.closest('.product').querySelector('.product__quantity-value').innerText);
                return false;
           }
            if (i + 1 === basketProd.length) {
                let newCard = document.createElement('div')
                newCard.className = 'cart__product'
                newCard.dataset.id = this.closest('.product').dataset.id
                newCard.innerHTML = `<img class="cart__product-image" src="${this.closest('div.product').querySelector('img').src}"><div class="cart__product-count">
                ${this.closest('.product').querySelector('.product__quantity-value').innerText}</div>`
                cartProducts.append(newCard)
                i = i + 1;
            }
        }
     } else {
        let newCard = document.createElement('div')
        newCard.className = 'cart__product'
        newCard.dataset.id = this.closest('.product').dataset.id
        newCard.innerHTML = `<img class="cart__product-image" src="${this.closest('.product').querySelector('img').src}"><div class="cart__product-count">
        ${this.closest('.product').querySelector('.product__quantity-value').innerText}</div>`
        cartProducts.append(newCard)
    }
}

for (let inc of btnInc) {
     inc.addEventListener('click', incQuantity)
}

for (let dec of btnDec) {
    dec.addEventListener('click', decQuantity)
}

for (let add of btnAdd) {
    add.addEventListener('click', productAdd)
}


