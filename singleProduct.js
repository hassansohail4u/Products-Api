const data = localStorage.getItem("id")

// console.log(data);

const singleCart = document.querySelector(".single-cart")
const reviewsContainer = document.querySelector(".reviews-container")


// is ma see more banana hai
fetch(`https://dummyjson.com/products/${data}`)

.then((res) => res.json())
.then((res) => {
    // console.log(res);

    singleCart.innerHTML = `
     <img src="${res.thumbnail}" alt="Product Image">
        <h1>Title : ${res.title}</h1>
        <h2>Category : ${res.category}</h2>
        <h2>Return Policy : ${res.returnPolicy}</h2>
        <h2>Warranty : ${res.warrantyInformation}</h2>
        <p class="paragraph"><span class="description">Description </span>: ${res.description}</p>
        <h2>Price : $${res.price}</h2>`

        res.reviews.map((items) => {
            // console.log(items);
            
            reviewsContainer.innerHTML += `
            <div class="review-cart">
        <h2>Reviewer Name : ${items.reviewerName}</h2>
         <h2>Comment : ${items.comment}</h2>
        <h2>Rating : ${items.rating}</h2>
        </div>`
        })
    
        

})


function goBack(){
    location = "./index.html"
}
