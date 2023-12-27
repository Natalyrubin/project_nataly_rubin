'use strict'

// ------------------------
// open new page with LS Data products

const itemsBox = document.querySelector('.itemsBox');
const payButton = document.querySelector('#payButton');
let product;


const loadCartPageFromLS = () => {
    const savedCart = window.localStorage.getItem('savedCart');

    if (savedCart === null) {
        payButton.disabled = true;
    } else {
        const itemIds = savedCart.split(',');

        for (let i = 0; i < itemIds.length; i++) {
            fetchProductsData(itemIds[i]);
        }
    }
}


const sumPriceItems = document.querySelector('.sumPriceItems');
let itemsArray = [];

const fetchProductsData = async (productId) => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    product = await response.json();

    itemsArray.push(product);

    const sum = itemsArray.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, 0);

    let sumParagHtml = `You Have ${itemsArray.length} Items In Your Cart. <br> Your Total Price is: ${sum.toLocaleString()}<i class="fas fa-dollar-sign"></i>
    `;

    let html = " ";
    for (let i = 0; i < itemsArray.length; i++) {
        html += `   
        <div class="itemBox">
        <img src="${itemsArray[i].thumbnail}" alt="" class="itemIMG">
        <h2>${itemsArray[i].title}</h2>
        <h3>${itemsArray[i].brand}</h3>
        <!-- <p class="itemDescription">${itemsArray[i].description}.</p> -->

        <div class="priceRatArea">
            <P class="number" id="pPrice">price: ${itemsArray[i].price} <i class="fas fa-dollar-sign"></i><P>
            <P class="number" id="pRating">rates: ${itemsArray[i].rating} <i class="fas fa-star"></i></P>
        </div>

        <div class="buttonsDiv">
        <button id="button-div" onclick="buyNow(${itemsArray[i].id})">Buy Now</button> 
        <button id="button-div" onclick="deleteItem(${itemsArray[i].id})">Move To 🗑️</button> 
        </div>
        </div>
        `
        itemsBox.innerHTML = html;
        sumPriceItems.innerHTML = sumParagHtml;
    }
}


loadCartPageFromLS()



// ------------------------
// delete product from LS and loaded cartElement and cartPage



const deleteItem = async (productId) => {

    itemsArray = itemsArray.filter(item => item.id !== productId);

    saveUserItemCart()
}


const saveUserItemCart = () => {
    const savedCart = window.localStorage.getItem('savedCart');
    let newArray = [];

    for (let i = 0; i < itemsArray.length; i++) {
        newArray.push(itemsArray[i].id)
    }

    window.localStorage.setItem('savedCart', newArray);
    window.location.reload();


    if (savedCart.length === 1) {
        localStorage.removeItem('savedCart');
    }
}






