'use strict'

// ------------------------
// open new page with homepage Data product

const queryString = window.location.search;
console.log(queryString);


const urlParams = new URLSearchParams(queryString);
console.log(urlParams)


const productId = urlParams.get('id');
console.log(productId);



let product;

const showProduct = async (productId) => {

    const productContainer = document.querySelector('.container');
    const headTitle = document.querySelector('head');

    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    product = await response.json();
    console.log(product);

    let headPage = '';
    headPage += `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="productPage.css">
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet">
        <link href="https://fonts.cdnfonts.com/css/electrical" rel="stylesheet">
        <link rel="icon" type="image/png" href="${product.thumbnail}">
        <script src="https://kit.fontawesome.com/febc16e4b3.js"     crossorigin="anonymous"></script>
        <title>${product.title}</title>`;


    let html = '';

    html += `
        <div class="smallImg" id="gridItem1">
        `;


    for (let i = 0; i < product.images.length; i++) {
        html += `
        <img src ="${product.images[i]}" alt = ""   class="itemSmallPic">
        `;
    }

    html += ` 
        </div >

        <div class="bigImg">
            <img src="${product.thumbnail}"   alt="" class="itemBigPic" id="gridItem2">
        </div>


        <div class="itemDescription" id="gridItem3">
            <h1>${product.title}, ${product.brand}</h1>
            <p>⭐ ${product.rating} out of 5 stars</p>
            <hr>
            <p>Price: <span> ${product.price}$</span></p>
            <p>
                ${product.description}
            </p>
        
        <div class="buttonDiv">
            <button onclick="addToCart('${product.id}')">ADD TO CART 🛒</button>
            <button onclick="window.location.href='index.html'">BACK TO STORE</button>
            </div>
        </div>
        `;


    headTitle.innerHTML = headPage;
    productContainer.innerHTML = html;
}

showProduct(productId);


// -------------------
// save data product in LS & show it at cartItems


const cartParag = document.querySelector('#cartParag');
console.log(cartParag);
let itemsAray = [];



const addToCart = async (productId) => {
    console.log(productId);

    itemsAray.push(productId);
    console.log(itemsAray);
    saveUserItemCart();
}



const saveUserItemCart = () => {
    window.localStorage.setItem('savedCart', itemsAray);
    loadCartFromLS();

    toast.classList.add('toast-visible');
    setTimeout(() => {
        toast.classList.remove('toast-visible');
    }, 1000);
}



const loadCartFromLS = () => {
    const savedCart = window.localStorage.getItem('savedCart');


    if (savedCart !== null) {
        itemsAray = savedCart.split(',');
        let html = `<div class="cartArea" onclick="openCartPage()">
        <h3> Shopping Cart </h3>
        <p>
        You have ${itemsAray.length} items in your Cart,<br>
        <strong>CLICK HERE to SHOP NOW!</strong> 
        </p>
        </div>
        `;

        cartParag.innerHTML = html;
    } else {
        cartParag.innerHTML = `
        <p>
        🛒 <br> Your Cart Items is empty <br> Press ADD TO CART to start
        </p>
        `;
    }
}

loadCartFromLS();




// -------------------------
// open a new page with the cart items


const cartArea = document.querySelector('.cartArea');

const openCartPage = () => {
    window.location.href = `cartPage.html`;
}

