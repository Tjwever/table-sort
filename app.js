// main.js...

// 1. GET request using fetch()
fetch('https://jsonplaceholder.typicode.com/users')
    // Converting received data to JSON
    .then((response) => response.json())
    .then((data) => {
        // 2. Create a variable to store HTML table headers
        let li = ``

        // 3. Loop through each data and add a table row
        data.forEach((user) => {
            li += `<tr>
        <td>${user.id}</td>
        <td>${user.name} </td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td class="colorChange">${user.phone}</td>
        <td>${user.website}</td>
      </tr>`
        })

        // 4. DOM Display result
        document.getElementById('users').innerHTML = li
    })

// main.js

