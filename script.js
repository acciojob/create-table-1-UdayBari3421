function insert_Row() {
    const numRows = parseInt(prompt("Input number of rows:"));
    const table = document.getElementById("sampleTable");
    table.innerHTML = " ";

	for (let i = 0; i < numRows; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < 2; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `Row-${i} cell-${j}`;
        }
    }
  
  
}
