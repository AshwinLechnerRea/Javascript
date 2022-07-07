fetch("electiondata.php")
    .then(response => response.json())
    .then(data => {
        let html = ""
        let table = document.createElement("table");
        html += `  
            <tr>
                 <td>Partij</td>
                 <td>Zetels</td>
            </tr>
        `
        for (const party in data) {
            html += `
             <tr>
                 <td>${party}</td>
                 <td>${data[party]}</td>
            </tr>`
        }
        table.innerHTML = html;
        document.querySelector("body").appendChild(table);
    });