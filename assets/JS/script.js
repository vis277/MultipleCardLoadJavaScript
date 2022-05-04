var products=[
    {
        image:"./assets/image/t-shirt-1.jpg",
        price: 200,
        brand: "Roadster",
        deletedPrice:1500,
        description: "Blue Striped Polo T-Shirt",
        OFF: "(87% OFF)",
        Message: "Only few Left!"
},
{
    image:"./assets/image/t-shirt-2.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice:1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(60% OFF)",
    Message: "Only few Left!"
},
{
    image:"./assets/image/t-shirt-3.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice:1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(60% OFF)",
    Message: "Only few Left!"
},
{
    image:"./assets/image/t-shirt-4.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice:1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(60% OFF)",
    Message: "Only few Left!"
},
{
    image:"./assets/image/t-shirt-1.jpg",
    price: 200,
    brand: "Roadster",
    deletedPrice:1500,
    description: "Blue Striped Polo T-Shirt",
    OFF: "(87% OFF)",
    Message: "Only few Left!"
},
{
image:"./assets/image/t-shirt-2.jpg",
price: 200,
brand: "Roadster",
deletedPrice:1500,
description: "Blue Striped Polo T-Shirt",
OFF: "(60% OFF)",
Message: "Only few Left!"
},
{
image:"./assets/image/t-shirt-3.jpg",
price: 200,
brand: "Roadster",
deletedPrice:1500,
description: "Blue Striped Polo T-Shirt",
OFF: "(60% OFF)",
Message: "Only few Left!"
},
{
image:"./assets/image/t-shirt-4.jpg",
price: 200,
brand: "Roadster",
deletedPrice:1500,
description: "Blue Striped Polo T-Shirt",
OFF: "(60% OFF)",
Message: "Only few Left!"
}
]
var list=document.getElementById('list');
for(i=0;i<products.length;i++){
    var div=document.createElement('div');
    div.className="main-container";
    div.innerHTML= `<div class="image-container"><img class="image" src=${products[i].image} alt="Loading" ></div>
    <div class="brand"><span class=brand-span>${products[i].brand}</span></div>
    <div class="description">${products[i].description}</div>
    <div class="price"><span class="span-price"> Rs ${products[i].price}</span><span class="original-price"> Rs ${products[i].deletedPrice}</span><span class="off">${products[i].OFF}</span></div>
    <div class="message">${products[i].Message}</div>`;
    list.appendChild(div);
}