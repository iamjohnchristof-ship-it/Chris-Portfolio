document.addEventListener("DOMContentLoaded", () => {
    fetch("student.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector("#studentTable tbody");
            tableBody.innerHTML = ""; // Clear any default content

            data.forEach(student => {
                const row = document.createElement("tr");
                
                row.innerHTML = `
                    <td>${student.lrn}</td>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.section}</td>
                    <td><img src="${student.image}" alt="${student.name}"></td>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error loading the student JSON data:", error);
        });
});