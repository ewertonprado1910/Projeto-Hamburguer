
const list = document.querySelector("ul")
const showAllButton = document.querySelector(".show-all")
const buttonMap = document.querySelector(".button-map")
const sumAllButton = document.querySelector(".sum-all")
const filterButton = document.querySelector(".filter")

function editedVelue(value){
    return newValue = value.toLocaleString("pt-BR", {
        style:"currency",
        currency:"BRL"
        

    })
 
}
function showAll(productsArray) {
    let myLi = ""

    productsArray.forEach(products => {
        myLi += ` 
        <li>
           <img src=${products.src}>
           <p>${products.name}</p>
           <p class="price-of-item">R$ ${editedVelue (products.price)}</p>
        </li>
     `
    })
    list.innerHTML = myLi

}

function mapAll() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrice)
}
function sumAll() {
    const velueTotal = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        <p>O valor total: R$ ${editedVelue (velueTotal)}</p>
    </li>
    
    `
}
function filterVegan() {
    const filter = menuOptions.filter((item) => item.vegan === true)

    showAll(filter)

}



showAllButton.addEventListener("click", () => showAll(menuOptions))
buttonMap.addEventListener("click", mapAll)
sumAllButton.addEventListener("click", sumAll)
filterButton.addEventListener("click", filterVegan)


















