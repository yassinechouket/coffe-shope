let navbar =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclik = () =>{
    navbar.classList.toggle('active');
}
let searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclik = () =>{
    searchForm.classList.toggle('active');
}
let cartItem =document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclik = () =>{
    cartItem.classList.toggle('active');
}