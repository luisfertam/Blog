//Database









//Global
var products = [];
var cartItems = [];
var cart_n = document.getElementById("cart_n");
//Divs
var productDiv = document.getElementById("productDiv");
var promotionDiv = document.getElementById("promotionDiv");
var boxDiv = document.getElementById("boxDiv");
//Info
var PRODUCT = [
    { name: 'Samsung Galaxy A50 64GB', price: 849900 },
    { name: 'In Ears M6 Pro', price: 284900 },
    { name: 'Tira LED RGB', price: 24900 },
    { name: 'Abanico sencillo', price: 74900 }
];
var PROMO = [
    { name: 'Promoción', price: 5 }
];
var BOX = [
    { name: 'Caja', price: 15 }
];
//Html
function HTMLproduct(con) {
    let URL = `Images/product${con}.jpg`;
    let btn = `btnProduct${con}`;
    return `
        <div class="col-md-6">
            <div class="card mb-4 shadow-sm">
                <div class="cardImg">
                    <p align=center><img class="card-img-top" style="height:19rem; width:auto;" src="${URL}" alt="CardImage"></p>
                </div>
                <div class="card-body">
                    <i style="color:gold"; class="fa fa-star"></i>
                    <i style="color:gold"; class="fa fa-star"></i>
                    <i style="color:gold"; class="fa fa-star"></i>
                    <i style="color:gold"; class="fa fa-star"></i>
                    <i style="color:gold"; class="fa fa-star"></i>
                    <p class="card-text">${PRODUCT[con-1].name}</p>
                    <p class="card-text">Precio: $${PRODUCT[con-1].price} COP</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${PRODUCT[con-1].name}','${PRODUCT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" href="cart.html">Comprar</a></button>
                            <button id="${btn}" type="button" onclick="cart('${PRODUCT[con-1].name}','${PRODUCT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Añadir al carrito</button>
                        </div>
                        <small class="text-muted">Envío gratis</small>
                    </div>
                </div>
            </div>
        </div>
            `
}

function HTMLpromotionProduct() {
    let URL = `Images/Carousel/Slide1.jpg`;
    let btn = `btnPromotion`;
    return `
        <div class="row featurette">
            <div class="col-md-7">
                <h2 id="Promotions" style="padding-top:70px;">Promociones</h2>
                <p classs="lead">Disfruta de las grandes promociones que CUBE Shop trae a Colombia</p>
                <h3>$ ${PROMO[0].price} COP</h3>
                <button type="button" onclick="cart2('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary">
                <a style="color:inherit;" href="cart.html">Comprar</a></button>
                <button id="${btn}" type="button" onclick="cart('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary">Añadir al carrito</button>
                </div>
                <div class="col-md-5">
                <img src="${URL}" width="400">
                </div>
                </div>
                `
}

function HTMLboxProduct() {
    let URL = `Images/Carousel/Slide0.jpg`;
    let btn = `btnBox`;
    return `
        <div class="row featurette">
            <div class="col-md-7">
                <img src="${URL}" width=400>
            </div>
            <div class="col-md-5">
                <h2 id="Box" style="padding-top:70px;">Lotes</h2>
                <p class="lead">Texto ideal para convencer a mayoristas</p>
                <h3>$ ${BOX[0].price} COP</h3>
                <button type="button" onclick="cart2('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit;" href="cart.html">Comprar</a></button>               
                <button id="${btn}" type="button" onclick="cart('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary">Añadir al carrito</button>
            </div>
        </div>
            `
}
//Animation
function animation() {
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        icon: 'success',
        timer: 2000,
        title: 'Añadido al carrito'
    })
}
//Carrito
function cart(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
    animation();
}

function cart2(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display = "none";
}

function render() {
    for (let index = 1; index <= 4; index++) {
        productDiv.innerHTML += `${HTMLproduct(index)}`;
    }
    promotionDiv.innerHTML += `${HTMLpromotionProduct()}`;
    boxDiv.innerHTML += `${HTMLboxProduct()}`;
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }
};