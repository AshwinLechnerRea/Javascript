let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    fetch("https://codecrashersnl.github.io/json/users.json")
        .then(response => response.json())
        .then(data => {
            for (const user of data.users) {
                let article = document.createElement("article");
                article.setAttribute("id", user.userId);
                let html = `  
                    <p>${user.firstName}</p>
                    <p>${user.lastName}</p>
                    <p>${user.phoneNumber}</p>
                    <p>${user.emailAddress}</p>`
                article.innerHTML = html;
                document.querySelector("body").appendChild(article);
            }
        })
});

// async function fetchData() {
//     const response = await fetch("https://codecrashersnl.github.io/json/users.json");
//     const data = await response.json();
//     for (let [key, name] of Object.entries(data)) {
//         console.log(key + ': ' + name);
//     }
// }