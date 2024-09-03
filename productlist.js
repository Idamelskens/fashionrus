fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
.then((res) => res.json())
.then(showProducts);

function showProducts(products) {
    //looper og kalder showProduct
    console.log(products)
    products.forEach(showProduct);
}

function showProduct(product) {
    //fange template
const template = document.querySelector("#smallProductTemplate").content;
// lav en kopi
const copy = template.cloneNode(true);

//ændre indhold 

copy.querySelector("h3").textContent = product.productdisplayname;
copy.querySelector(".price").textContent = product.price;
copy.querySelector(".subtle").textContent = product.brandname;
copy.querySelector(".subtle").textContent = product.articletype;
// copy.querySelector(".discounted").textContent = product.discount;

// hvordan får jeg min rabat til at virke??

// hvordan får jeg både mærket og articletype frem??

if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
}

if (product.discount) {
    console.log(product)
    //produktet på udsalg
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p span").textContent = Math.round(product.price -(product.price * product.discount) / 100);
    copy.querySelector(".discounted p+p span").textContent = product.discount;
}

copy
.querySelector(".read-more")
.setAttribute("href", `produkt.html?id=${product.id}`)

//min product side gider ikke at vises 

// Hvis du har et billedlink i API-responsen, skal du opdatere billedet her:
copy.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
copy.querySelector("img").alt = product.productdisplayname;

document.querySelector("main div").appendChild(copy);

}