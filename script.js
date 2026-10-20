Papa.parse('homlessness.csv', {
download: true,
header: true,
skipEmptyLines: true,

complete: function(results) {
console.log("running");
console.log(results.data);
const tbody = document.querySelector('#dataTable tbody');

results.data.forEach(row => {
const tr = document.createElement('tr');

tr.innerHTML = `
<td>${row["Year"]}</td>
<td>${row["Initial assessments"]}</td>
<td>${row["Prevention or relief"]}</td>
<td>${row["Prevention duty"]}</td>
<td>${row["Service Related"]}</td>
<td>${row["Relief Duty"]}</td>
<td>${row["Not threatened"]}</td>`;

tbody.appendChild(tr);
});
},

error: function(err) {
console.error("FAILED");
console.error(err);
}
});

