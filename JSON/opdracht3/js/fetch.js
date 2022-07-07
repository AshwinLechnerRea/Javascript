fetch("electiondata.php")
    .then(response => response.json())
    .then(data => {
        let html = ""
        for (const party in data) {
            console.log(party, zetels)
        }
    });