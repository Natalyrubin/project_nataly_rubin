'use strict'


// -------------------------
// show & hide items



const itemsBox = document.querySelector('.itemsBox');
const showHideCollectionText = document.querySelector('.showHideCollectionText');
const buttonArea = document.querySelector('.buttonArea');
const topParag = document.querySelector('.topParag');

let products;
let productPage;


const showCollection = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=100');
    const data = await response.json();

    products = data.products;

    const savedCart = window.localStorage.getItem('savedCart');

    if (savedCart === null) {
        showHideCollectionText.innerText = `Press HIDE ITEMS BUTTON to hide the items`;
        buttonArea.innerHTML = `<div class="buttonArea">
        <button onclick="hideCollection()">HIDE ITEMS</button>
        </div>
        `;
    }

    if (savedCart !== null) {
        showHideCollectionText.innerHTML = `Hi! you back 😊 good to see you!<br> You have items in your Cart,<br>
        CLICK HERE to SHOP NOW!`;
        buttonArea.innerHTML = `<div class="buttonArea">
        <button onclick="window.location.href='cartPage.html'">BUY NOW</button>
        </div>`;

    }


    let html = " ";
    for (let i = 0; i < products.length; i++) {
        html += `   
        <div class="itemBox">
        <img src="${products[i].thumbnail}" alt="" class="itemIMG">
        <h2>${products[i].title}</h2>
        <h3>${products[i].brand}</h3>
        <p class="itemDescription">${products[i].description}.</p>

        <div class="priceRatArea">
            <P class="number" id="pPrice">price: ${products[i].price} <i class="fas fa-dollar-sign"></i><P>
            <P class="number" id="pRating">rates: ${products[i].rating} <i class="fas fa-star"></i></P>
        </div>

        <div class="buttonsDiv">
        <button id="button-div" onclick="openProductPage(${products[i].id})">Learn More</button> 
        <button id="button-div" onclick="addToCart(${products[i].id})" >Add To Cart</button> 
</div>
        </div>
        `
    }

    itemsBox.innerHTML = html;
    fetchCategories();
    fetchPrice();
    fetchRate();
}


const hideCollection = () => {
    showHideCollectionText.innerHTML = ` <p class="showHideCollectionText">Your ONLINE store <br> Press SHOW ITEMS BUTTON to show the items</p>`;
    buttonArea.innerHTML = `<button onclick="showCollection()">SHOW ITEMS</button>`;
    itemsBox.innerHTML = ``;
    selectCategory.innerHTML = ``;
    selectPrice.innerHTML = ``;
    selectRate.innerHTML = ``;
}



// ------------------
// make selected labels for sorting


const handleCategoryChange = async () => {
    const elmCateogiesDropdown = document.querySelector('.categories')
    const categoryName = elmCateogiesDropdown.value;

    const responseCategory = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
    const categoryData = await responseCategory.json();
    const productsCategory = categoryData.products;
    console.log(productsCategory);
    console.log(productsCategory[0].id);

    let html = " ";
    for (let i = 0; i < productsCategory.length; i++) {
        html += `   
            <div class="itemBox">
            <img src="${productsCategory[i].thumbnail}" alt="" class="itemIMG">
            <h2>${productsCategory[i].title}</h2>
            <h3>${productsCategory[i].brand}</h3>
            <p class="itemDescription">${productsCategory[i].description}.</p>

            <div class="priceRatArea">
                <P class="number" id="pPrice">price: ${productsCategory[i].price} <i class="fas fa-dollar-sign"></i><P>
                <P class="number" id="pRating">rates: ${productsCategory[i].rating} <i class="fas fa-star"></i></P>
            </div>

                <div class="buttonsDiv">
        <button id="button-div" onclick="openProductPage(${productsCategory[i].id})" >Learn More</button> 
        <button id="button-div" onclick="addToCart(${productsCategory[i].id})" >Add To Cart</button> 
        </div> 
            </div>
            `
        itemsBox.innerHTML = html;
    }
}



const selectCategory = document.querySelector('.selectCategory');

const fetchCategories = async () => {
    const response = await fetch('https://dummyjson.com/products/categories?limit=100')
    const categories = await response.json();


    let html = '<label for="categories">Choose a Category </label>';
    html += `<select name="categories" class="categories" onchange="handleCategoryChange()">`
    for (let i = 0; i < categories.length; i++) {
        html += `<option value="${categories[i]}">${categories[i]}</option>`
    }
    html += '</select>';

    selectCategory.innerHTML = html;
}


//--------------------------

const selectPrice = document.querySelector('.selectPrice');
let priceCategories;

const fetchPrice = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=100')
    const data = await response.json();
    products = data.products;


    priceCategories = [
        { label: 'UP TO 499$', min: 0, max: 499 },
        { label: '500-999$', min: 500, max: 999 },
        { label: '1000-1499$', min: 1000, max: 1499 },
        { label: '1500-1999$', min: 1500, max: 1999 },
    ];


    let html = '<label for="price">Choose a Price Range </label>';
    html += `<select name="price" class="price" onchange="handlePriceChange()">`;

    for (let i = 0; i < priceCategories.length; i++) {
        html += `<option value="${i}">${priceCategories[i].label}</option>`;
    }

    html += '</select>';

    selectPrice.innerHTML = html;
}



const handlePriceChange = async () => {
    const elmPriceDropdown = document.querySelector('.price');
    const priceRange = elmPriceDropdown.value;

    const response = await fetch('https://dummyjson.com/products?limit=100');
    const data = await response.json();
    const products = data.products;

    const selectedPriceCategory = priceCategories[priceRange];

    const filteredProducts = products.filter(product => {
        return product.price >= selectedPriceCategory.min && product.price <= selectedPriceCategory.max;

    }); console.log(filteredProducts);

    let html = " ";
    for (let i = 0; i < filteredProducts.length; i++) {
        html += `   
            <div class="itemBox">
            <img src="${filteredProducts[i].thumbnail}" alt="" class="itemIMG">
            <h2>${filteredProducts[i].title}</h2>
            <h3>${filteredProducts[i].brand}</h3>
            <p class="itemDescription">${filteredProducts[i].description}.</p>

            <div class="priceRatArea">
                <p class="number" id="pPrice">price: ${filteredProducts[i].price} <i class="fas fa-dollar-sign"></i></p>
                <p class="number" id="pRating">rates: ${filteredProducts[i].rating} <i class="fas fa-star"></i></p>
            </div>

            <div class="buttonsDiv">
        <button id="button-div" onclick="openProductPage(${filteredProducts[i].id})" >Learn More</button> 
        <button id="button-div" onclick="addToCart(${filteredProducts[i].id})" >Add To Cart</button> 
</div> 
            </div>
        `;
    }

    itemsBox.innerHTML = html;
};


//-----------------------


const selectRate = document.querySelector('.selectRate');
let rateCategories;

const fetchRate = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=100')
    const data = await response.json();
    products = data.products;


    rateCategories = [
        { label: '4-4.5', min: 4, max: 4.5 },
        { label: '4.5-5', min: 4.51, max: 5 },
    ];


    let html = '<label for="price">Choose a Rate Range </label>';
    html += `<select name="rate" class="rate" onchange="handleRateChange()">`;

    for (let i = 0; i < rateCategories.length; i++) {
        html += `<option value="${i}">${rateCategories[i].label}</option>`;
    }

    html += '</select>';

    selectRate.innerHTML = html;
}




const handleRateChange = async () => {
    const elmRateDropdown = document.querySelector('.rate');
    const rateRange = elmRateDropdown.value;

    const response = await fetch('https://dummyjson.com/products?limit=100');
    const data = await response.json();
    const products = data.products;

    const selectedRateCategory = rateCategories[rateRange];

    const filteredProducts = products.filter(product => {
        return product.rating >= selectedRateCategory.min && product.rating <= selectedRateCategory.max;

    });

    let html = " ";
    for (let i = 0; i < filteredProducts.length; i++) {
        html += `   
            <div class="itemBox">
            <img src="${filteredProducts[i].thumbnail}" alt="" class="itemIMG">
            <h2>${filteredProducts[i].title}</h2>
            <h3>${filteredProducts[i].brand}</h3>
            <p class="itemDescription">${filteredProducts[i].description}.</p>

            <div class="priceRatArea">
                <p class="number" id="pPrice">price: ${filteredProducts[i].price} <i class="fas fa-dollar-sign"></i></p>
                <p class="number" id="pRating">rates: ${filteredProducts[i].rating} <i class="fas fa-star"></i></p>
            </div>

                <div class="buttonsDiv">
        <button id="button-div" onclick="openProductPage(${filteredProducts[i].id})" >Learn More</button> 
        <button id="button-div" onclick="addToCart(${filteredProducts[i].id})" >Add To Cart</button> 
</div>
            </div>
        `;
    }

    itemsBox.innerHTML = html;
};





// ------------------
// save data in LS from click on addToCart Button

const loader = document.querySelector('#loader');

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



//------------------
// open a new page with product data


const openPageButton = document.querySelector("button-div");


const openProductPage = (productId) => {
    window.location.href = `productPage.html?id=${productId}`;
}



// ---------------- 
// load homePage cart from LS

const cartParag = document.querySelector('#cartParag');
let itemsAray = [];

const loadCartFromLS = () => {
    const savedCart = window.localStorage.getItem('savedCart');
    if (savedCart !== null) {
        itemsAray = savedCart.split(',');
        let html = `
        <div class="cartArea" onclick="openCartPage()">
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
        🛒 <br> Your Cart Items is empty <br> Press ADD TO CART to start
        `;
    }
}

loadCartFromLS();



// -------------------------
// show Items automaticly for a returning users



function showItemForReturnUser() {
    const savedCart = window.localStorage.getItem('savedCart');

    if (savedCart !== null) {
        showCollection()
    } else return;

};
showItemForReturnUser();


// -------------------------
// open a new page with the cart items


const cartArea = document.querySelector('.cartArea');

const openCartPage = () => {
    window.location.href = 'cartPage.html';
}





// -------------------------
// addEventListener - DOMContentLoaded



document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});











