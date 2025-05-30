const url = "https://dummyjson.com/products";
let cart = [];

async function getProducts(url){

    const response = await fetch(url);
    const data = await response.json();
    const array = [...data.products];
    const formattedProducts = [];

    for( let i = 0; i < array.length; i++ ){

        formattedProducts.push({

            title : array[i].title,
            description : array[i].description,
            price : array[i].price,
            picture : array[i].images[0]

        })
    }

    return formattedProducts;

}


const productsAll =await getProducts(url);

function filterProduct(){
    const input=document.getElementById("searchInput");
    input.addEventListener("input",(event)=>{
        const filter=productsAll.filter((post)=>post.title.includes(event.target.value)||post.description.includes(event.target.value));
        display(filter);
    })
}
filterProduct()

function display(filter){
    const container = document.getElementById("products"); 
    container.innerHTML="";
    filter.map((value)=>{
        const div=document.createElement("div");
        div.className="products";
        div.innerHTML=` <h2>${value.title}</h2>
                        <p>${value.description}</p>
                        <p>${value.price} €</p>
                        <img src="${value.picture}">`
        const button=document.createElement("button");
        button.textContent = "Ajouter au panier";
        button.addEventListener("click",(event)=>{
            if (!cart.some(item => item.title === value.title)) {
                cart.push(value);
            }
            displayCart(cart);
        })
        div.appendChild(button);
        container.appendChild(div);
    })
    
}
function displayCart(cart){

    let price= 0;
    const container = document.getElementById("cart");
    container.innerHTML="";
    for (let i = 0; i < cart.length; i++) {
        price += cart[i].price;
        const div= document.createElement("div");
        div.className= "products";
        div.innerHTML= ` <h2>${cart[i].title}</h2>
                         <p>${cart[i].price} €</p>`
        container.appendChild(div);
    }
    const total = document.createElement("p");
    total.innerHTML = `<strong>Total : ${price} € </strong>`;
    container.appendChild(total);
}


