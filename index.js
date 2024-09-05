const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate").content;
const categoryList = document.querySelector("#categoryList");
const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;

fetch ("https://kea-alt-del.dk/t7/api/categories")
.then(response => response.json())
.then((categories) => {
    categories.forEach((category) => {
        categoryList.innerHTML += `<li><a href="index.html?category=${category.category}">${category.category}</a></li>`;
    }) 
    // categoryList.innerHTML = `<li>${categories.category}</li>`;
});

if (params.has("category")) {
    url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
} else {
    url = "https://kea-alt-del.dk/t7/api/products";
}