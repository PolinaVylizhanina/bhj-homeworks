let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')
xhr.responseType = 'json'
xhr.send()

const currencyBlock = document.getElementById('items')
const loader = document.getElementById('loader')

function loadCurrency() {
    if(xhr.readyState === 4) {
        loader.classList.toggle('loader_active')

        let obj = xhr.response
        let currency = obj.response.Valute
        for(let item in currency) {

            let charCode = currency[item]['CharCode']
            let value = currency[item]['Value']
            const newCurrency = document.createElement('div')
            newCurrency.classList.add('item')
            newCurrency.innerHTML = `
            <div class="item__code">
                    ${charCode}
                </div>
                <div class="item__value">
                    ${value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            `
            currencyBlock.append(newCurrency)
           
        }
    }
}

xhr.addEventListener('readystatechange', loadCurrency)