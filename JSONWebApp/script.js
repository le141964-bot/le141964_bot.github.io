document.getElementById('load-data').addEventListener('click', loadData);
document.getElementById('data-form').addEventListener('submit', addData);
 
async function loadData() {
    const response = await fetch('data.json');
    const data = await response.json();
    const display = document.getElementById('data-display');
    display.innerHTML = '';
    data.forEach(item => {
        display.innerHTML += `<p>Name: ${item.name}, Email: ${item.email}</p>`;
    });
}
 
async function addData(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const newData = { name, email };
 
    const response = await fetch('data.json');
    const data = await response.json();
 
    data.push(newData);
 
    // This step simulates the JSON file update (requires server or backend)
    console.log('Updated Data:', data);
 
    loadData(); // Refresh display
}