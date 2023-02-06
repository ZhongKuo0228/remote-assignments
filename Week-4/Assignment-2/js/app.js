let productsURL = "https://appworks-school.github.io/Remote-Assignment-Data/products";
let productsList = document.getElementById("products");
let btn = document.querySelector("button");

//Make an AJAX request
function getJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data[0].price);
            return callback(data);
        }
    };
    xhr.send();
}

//
function generateHTML(data) {
    for (let i = 0; i < data.length; i++) {
        let newDiv = document.createElement("div");
        productsList.appendChild(newDiv);
        newDiv.innerHTML = `
            <h3>產品${i + 1}：${data[i].name}</h3>
            <p>價格：NT$${data[i].price}元</p>
            <p>產品說明：${data[i].description}</p>
            <hr>
            `;
    }
}

btn.addEventListener("click", (event) => {
    getJSON(productsURL, generateHTML);
    event.target.remove();
});
