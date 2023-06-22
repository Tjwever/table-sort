// main.js...

// 1. GET request using fetch()
fetch('https://jsonplaceholder.typicode.com/users')
    // Converting received data to JSON
    .then((response) => response.json())
    .then((users) => {
        // console.log(users[0].username)

        let newArr = users.filter((user) => {
            return user.id > 5
        })

        // console.log(newArr)

        // 2. Create a variable to store HTML table tr and td's
        let li = ''

        // 3. Loop through each data and add a table row
        newArr.forEach((user) => {
            li += `<tr>
        <td>${user.id}</td>
        <td>${user.name} </td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
      </tr>`
        })

        // 4. DOM Display result
        document.getElementById('table-data').innerHTML = li
    })

// main.js
