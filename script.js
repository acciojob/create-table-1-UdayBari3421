const table = document.getElementById("sampleTable");

function insert_Row() {
	for (let i = 0; i < 1; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < 2; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `New Cell${j+1}`;
        }
    }
  
  
}
