let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(name,price){

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem("cart",JSON.stringify(cart));

    alert(name+" Added To Cart");
}



function showCart(){

let cartItems=document.getElementById("cartItems");

if(!cartItems) return;


cartItems.innerHTML="";

let total=0;


cart.forEach((item,index)=>{

total+=item.price;


cartItems.innerHTML+=`

<div>
<h3>${item.name}</h3>
<p>Price: Rs ${item.price}</p>

<button onclick="removeCart(${index})">
Remove
</button>

</div>

<hr>

`;

});


cartItems.innerHTML+=`

<h2>Total: Rs ${total}</h2>

`;

}



function removeCart(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

showCart();

}



window.onload=showCart;