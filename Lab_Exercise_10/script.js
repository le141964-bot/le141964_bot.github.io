document.getElementById("loadData").addEventListener("click", loadData); 
function loadData() {
    fetch("https://api.coinbase.com/v2/currencies")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.status);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector("#outputTable tbody");
            tableBody.innerHTML = ""; 

            data.data.forEach(item => {
                const row = `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => {
            console.error("Fetch Error:", error);
            alert("Failed to load data.");
        });
}