function insert_Row() {
    const numRows = parseInt(prompt("Input number of rows:"));
    const table = document.getElementById("sampleTable");
    table.innerHTML =  `<tr>
			<td>New Cell1</td> 
			<td>New Cell2</td>
		</tr> 
		<tr>
			<td>Row2 cell1</td> 
			<td>Row2 cell2</td>
		</tr> 
		<tr>
			<td>Row3 cell1</td> 
			<td>Row3 cell2</td>
		</tr>
	  <tr>
			<td>Row4 cell1</td> 
			<td>Row4 cell2</td>
		</tr>
	`;

	for (let i = 0; i < numRows; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < 2; j++) {
            const cell = row.insertCell(j);
            cell.textContent = `New Cell${j+1}`;
        }
    }
  
  
}
