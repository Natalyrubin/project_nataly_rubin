'use strict'


//------------------------
// show the main products list automatically when the user open the page

const loader = document.querySelector('#loader');
const tbody = document.querySelector('tbody');
const h2 = document.querySelector('h2');
const mainProductsContainer = document.querySelector('.topArea');

let products;
let data;


const showProductsList = async () => {
    loader.style.display = 'block';
    h2.style.display = 'none';
    mainProductsContainer.style.display = 'none';
    const response = await fetch('https://dummyjson.com/products?limit=100', { method: 'GET' });
    data = await response.json();

    products = data.products;

    let html = "";
    for (let i = 0; i < products.length; i++) {
        html += `
            <tr id="rowID${products[i].id}">
                <td id="${products[i].id}">${products[i].id}</td>
                <td>${products[i].brand}</td>
                <td>${products[i].title}</td>
                <td>${products[i].price}$</td>
                <td>${products[i].stock}</td>
                <td onclick="deleteProduct(${products[i].id})" class="deleteProduct">🗑️</td>
                <td onclick="openUpdateProductArea(${products[i].id})" class="openUpdateProductAreaButton">Update</td>
            </tr>
            `;

        loader.style.display = 'none';
        h2.style.display = 'block';
        mainProductsContainer.style.display = 'block';
        tbody.innerHTML = html;
    }
}


showProductsList();




//--------------------------------------------
// open add product area when the user clicked on "Add Product" button to add a new product to main list

const addProductArea = document.querySelector('.addRollArea');
const openAddProductAreaButton = document.querySelector('#openaddProductArea');
const closeAddProductAreaButton = document.querySelector('#addCancelButton');

addProductArea.style.display = 'none';


const openaddProductArea = () => {
    addProductArea.style.display = 'block';
}


const closeaddProductArea = () => {
    addProductArea.style.display = 'none';
}


//-----------------------------------------------
// add a new product to products list


const addBrand = document.querySelector('#addBrandValue')
const addTitle = document.querySelector('#addTitleValue')
const addPrice = document.querySelector('#addPriceValue')
const addStock = document.querySelector('#addStockValue')


const newProductSaved = async () => {


    const newProductDetails = {
        brand: addBrand.value,
        title: addTitle.value,
        price: addPrice.value,
        stock: addStock.value,
    }

    const postNewProduct = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProductDetails)
    }

    const response = await fetch('https://dummyjson.com/products/add', postNewProduct)
    const newProductData = await response.json()
    console.log(newProductData)

    tbody.innerHTML += `
        <tr id="rowID${newProductData.id}">
            <td id="${newProductData.id}">${newProductData.id}</td>
            <td>${addBrand.value}</td>
            <td>${addTitle.value}</td>
            <td>${addPrice.value}$</td>
            <td>${addStock.value}</td>
            <td onclick="deleteProduct(${newProductData.id})" class="deleteProduct">🗑️</td>
            <td onclick="openUpdateProductArea(${newProductData.id})" class="openUpdateProductAreaButton">Update</td>
        </tr>
    `;

    addBrand.value = ``;
    addTitle.value = ``;
    addPrice.value = ``;
    addStock.value = ``;

    closeaddProductArea();
}




//--------------------------------------------
// open update product area when the user clicked on the "Update" button to update an existing product in main list


const updateProductArea = document.querySelector('.updateRollArea');
const openUpdateProductAreaButton = document.querySelector('.openUpdateProductAreaButton');
const closeUpdateProductAreaButton = document.querySelector('#updateCancelButton');

updateProductArea.style.display = 'none';

const idProductLabel = document.querySelector('#idProductForUpdate');



const openUpdateProductArea = async (productID) => {
    idProductLabel.innerText = productID;
    updateProductArea.style.display = 'block';
}


const closeUpdateProductArea = () => {
    updateProductArea.style.display = 'none';
}


//-------------------------------------------
// choose a specifically product by clicked on update button, and then update the product from products list


const updateBrand = document.querySelector('#updateBrandValue');
const updateTitle = document.querySelector('#updateTitleValue');
const updatePrice = document.querySelector('#updatePriceValue');
const updateStock = document.querySelector('#updateStockValue');


const updateProduct = async () => {
    let productID = idProductLabel.innerText;
    const rowID = document.querySelector(`#rowID${productID}`);
    console.log(rowID);


    const updateProductDetails = {
        brand: updateBrand.value,
        title: updateTitle.value,
        price: updatePrice.value,
        stock: updateStock.value,
    }


    const response = await fetch(`https://dummyjson.com/products/${productID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateProductDetails)
    });
    const productData = await response.json();

    rowID.innerHTML = `
    <td id="${productID}">${productID}</td>
                <td>${productData.brand}</td>
                <td>${productData.title}</td>
                <td>${productData.price}$</td>
                <td>${productData.stock}</td>
                <td onclick="deleteProduct(${productID})" class="deleteProduct">🗑️</td>
                <td onclick="openUpdateProductArea(${productID})" class="openUpdateProductAreaButton">Update</td>
    `;


    updateBrand.value = ``;
    updateTitle.value = ``;
    updatePrice.value = ``;
    updateStock.value = ``;

    closeUpdateProductArea();

}



//-----------------------------------------------
// delete a specifically product from products list


let productsListAfterDelete;

const deleteProduct = async (productID) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${productID}`, { method: 'DELETE' });
        if (response.ok) {
            console.log(`Product with ID ${productID} deleted successfully.`);
            productsListAfterDelete = data.products.filter((product) => product.id !== productID)
            products = productsListAfterDelete;

            let html = "";
            for (let i = 0; i < products.length; i++) {
                html += `
            <tr id="rowID${products[i].id}">
                <td id="${products[i].id}">${products[i].id}</td>
                <td>${products[i].brand}</td>
                <td>${products[i].title}</td>
                <td>${products[i].price}$</td>
                <td>${products[i].stock}</td>
                <td onclick="deleteProduct(${products[i].id})" class="deleteProduct">🗑️</td>
                <td onclick="openUpdateProductArea(${products[i].id})" class="openUpdateProductAreaButton">Update</td>
                </tr>
                `;
                tbody.innerHTML = html;

            }

        } else {
            console.error(`Failed to delete product. Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error during DELETE request:', error);
    }
};




document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});

