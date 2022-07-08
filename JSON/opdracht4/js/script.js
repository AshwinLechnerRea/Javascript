async function fetchData() {
    const response = await fetch("js/data.json");
    const data = await response.json();
    for (const product of data) {
        let article = document.createElement("article");
        if (product.quantity === 0) {
            continue;
        }
        // article.setAttribute("id", product.userId);
        let html = `  
                    <img src="${product.image}" alt="${product.product_name}"  height="300" width="300">
                    <h4>${product.product_name}</h4>
                    <p>${product.supplier}</p>
                    <p>Aantal beschikbaar: ${product.quantity}</p>
                    <p>Prijs: ${product.unit_cost}</p>`
        article.innerHTML = html;
        document.querySelector("#container").appendChild(article);
    }
}
fetchData();