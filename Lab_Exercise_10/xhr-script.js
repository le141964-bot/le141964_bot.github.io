document.getElementById("loadData").addEventListener("click", loadData);

function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.coinbase.com/v2/currencies", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const tableBody = document.querySelector("#outputTable tbody");

            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);

                tableBody.innerHTML = ""; 

                response.data.forEach(item => {
                    const row = `
                        <tr>
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                        </tr>
                    `;
                    tableBody.innerHTML += row;
                });
            } else {
                console.error("XHR Error:", xhr.status);
                alert("Failed to load data using XHR.");
            }
        }
    };

    xhr.onerror = function () {
        alert("Network error occurred.");
    };

    xhr.send();
}
