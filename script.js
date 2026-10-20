apa.parse('homelessness.csv', {
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
        <td>${row["Year"}</td>
        <td>${row["Initial Assesments"]}</td>
        <td>${row["Prevention"]}</td>
        <td>${row["Prevention Duty"]}</td>
        <td>${row["Service Related Duty"]}</td
        <td>${row["Relief Duty"]}</td>
        <td>${row["Not Threatened"]}</td> 

            tbody.appendChild(tr); 
    });
  },

              error: function(err) {
    console.error("FAILED");
    console.error(err);
  }
});
