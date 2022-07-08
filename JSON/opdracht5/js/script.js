async function fetchData() {
    const response = await fetch("js/colors.json");
    const data = await response.json();
    let values = []
    for (rgba in data) {
        values.push(data[rgba]);
    }
    return values;
}

async function addStyle() {
    let colors = await fetchData();
    let divs = document.getElementsByClassName("block");

    for (let i = 0; i < divs.length; i++) {
        let randomNumber = Math.floor(Math.random() * colors.length);
        divs[i].style.backgroundColor = `rgba(${colors[randomNumber]}`;
        colors.splice(randomNumber, 1);
    }
    return colors;
}
async function addBackgroundColor() {
    let colors = await addStyle();
    document.querySelectorAll('.block').forEach(item => {
        item.addEventListener('click', event => {
            if (colors.length === 0) {
                location.reload();
            }
            let randomNumber = Math.floor(Math.random() * colors.length);
            event.target.style.backgroundColor = `rgba(${colors[randomNumber]}`;
            colors.splice(randomNumber, 1);
            console.log(colors);
        })
    })
}
addBackgroundColor();