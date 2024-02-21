fetch('games.json')
  .then(response => response.json())
  .then(data => {
    var gamesContainer = document.getElementById('games-container');
    data.games.forEach(game => {
      var gameElement = document.createElement('div');
      gameElement.className = 'game';

      var imgElement = document.createElement('img');
      imgElement.src = game.image;
      imgElement.loading = 'lazy';
      imgElement.width = '313';
      imgElement.className = 'game_image';

      var infoElement = document.createElement('div');
      infoElement.className = 'game_info';

      var nameElement = document.createElement('h1');
      nameElement.className = 'game_name';
      nameElement.textContent = game.name;

      var developerElement = document.createElement('h1');
      developerElement.className = 'game_developer';
      developerElement.textContent = game.developer;

      var genreElement = document.createElement('h1');
      genreElement.className = 'game_genre';
      genreElement.textContent = game.genre;

      infoElement.appendChild(nameElement);
      infoElement.appendChild(developerElement);
      infoElement.appendChild(genreElement);

      gameElement.appendChild(imgElement);
      gameElement.appendChild(infoElement);

      // Add click event listener
      gameElement.addEventListener('click', function() {
        window.location.href = 'player.html?cdn_url=' + encodeURIComponent(game.cdn_url);
      });

      gamesContainer.appendChild(gameElement);
    });
  })
  .catch(error => console.error('Error:', error));
