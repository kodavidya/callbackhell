function getUser(userId, callback) {
  setTimeout(() => {
    console.log('Fetching User Details');
    callback({ id: userId, name: 'Koda Vidya' });
  }, 1000);
}

function getFavoriteDestinations(user, callback) {
  setTimeout(() => {
    console.log('Fatched Favorite Destinations');
    callback(['Paris', 'New York', 'Tokyo']);
  }, 1000);
}

function getWeather(destination, callback) {
  setTimeout(() => {
    console.log(`Fatched Weather for ${destination}`);
    callback({ destination, weather: 'Sunny' });
  }, 1000);
}

getUser(1, (user) => {
  getFavoriteDestinations(user, (destination) => {
    getWeather(destination[0], (weather) => {
      console.log(`Weather in ${weather.destination}: ${weather.weather}`);
    });
  });
});
