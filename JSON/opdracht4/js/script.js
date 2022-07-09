async function fetchData() {
    const response = await fetch("js/data.json");
    const data = await response.json();
    return data;
}

function GetSortOrder(prop, order) {
    if (order === "asc") {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    } else if (order === "desc") {
        return function (a, b) {
            if (a[prop] < b[prop]) {
                return 1;
            } else if (a[prop] > b[prop]) {
                return -1;
            }
            return 0;
        }
    }
}

let selectBox = document.getElementById("order");
selectBox.addEventListener("change", function (e) {
    let container = document.getElementById("container");
    let articles = document.querySelectorAll("article");
    for (var i = 0; i < articles.length; i++) {
        container.removeChild(articles[i]);
    }
    if (e.target.value === "alpha") {
        createHTML("product_name", "asc");
    } else if (e.target.value === "price-asc") {
        createHTML("unit_cost", "asc");
    } else if (e.target.value === "quantity-desc") {
        createHTML("quantity", "desc");
    }
})

async function createHTML(prop, order) {
    let data = await fetchData();
    data.sort(GetSortOrder(prop, order));
    for (const product of data) {
        let article = document.createElement("article");
        if (product.quantity === 0) {
            continue;
        }
        let html = `  
                    <img src="${product.image}" alt="${product.product_name}"  height="300" width="300">
                    <h4>${product.product_name}</h4>
                    <p>${product.supplier}</p>
                    <p>Aantal beschikbaar: ${product.quantity}</p>
                    <p>Prijs: €${product.unit_cost},-</p>`;
        article.innerHTML = html;
        document.querySelector("#container").appendChild(article);
    }
}
createHTML("unit_cost", "asc");