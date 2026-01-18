const cart = document.getElementById('cart');
const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', function(){
    document.getElementById('popup-cart').style.display = 'none';
});

cart.addEventListener('click', function(){
    document.getElementById('popup-cart').style.display = 'flex';
});