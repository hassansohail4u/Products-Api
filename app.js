// console.log("Hello World!");

const div = document.querySelector(".container");


fetch("https://dummyjson.com/products")

.then((res) => res.json())
.then((res) => {
    // console.log(res.products);

    res.products.map((items) =>{
        div.innerHTML += `<div class="card">
            <img src="${items.thumbnail}" alt="Product thumbnail">
            <h1 class="product-title">${items.title}</h1>
            <h2>Price : $${items.price}</h2>
            <h2>Category : ${items.category}</h2>
            <button onclick="seeMore(${items.id})">See more</button>

        </div>`
    })
})
.catch((error) => {
    console.log(error);
    
})

function seeMore(id) {
    localStorage.setItem("id" , id)
    // console.log(id)
    window.location = "./singleProduct.html"
}




