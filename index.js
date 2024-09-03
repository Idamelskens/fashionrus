const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate").content;
const categoryList = document.querySelector("#categoryList");

fetch ("https://kea-alt-del.dk/t7/api/categories")
.then(response => response.json())
.then((categories) => {
    categories.forEach((category) => {
        categoryList.innerHTML += `<li>${category.category}</li>`
    }) 
    // categoryList.innerHTML = `<li>${categories.category}</li>`;
});