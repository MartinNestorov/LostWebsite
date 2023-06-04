fetch('Data.json')
    .then(response => response.json())
    .then(data => {
        const players = data.players;

        const table = document.getElementById('playerTable');

        // Iterate over the player data and create table rows
        players.forEach(player => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = player.id;
            row.appendChild(idCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = player.name;
            row.appendChild(nameCell);

            const pointsCell = document.createElement('td');
            pointsCell.textContent = player.points;
            row.appendChild(pointsCell);

            table.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });