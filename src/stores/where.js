import Vue from 'vue';

export default {
  get() {
    return getRandomCity().then(getLatLngByCity);
  }
};

/**
 * use douban.com api to get random city name
 * @return {Promise.<String>} city name
 */
function getRandomCity() {
  var url = 'https://api.douban.com/v2/loc/list';
  var cityId = (Math.random() * 1350) | 0;
  var start = cityId;
  var index = cityId % 20;
  return Vue.http.jsonp(url, {start: start})
    .then(response => {
      return response.data.locs[index].name; // city name
    });
}

/**
 * get geo location from google api
 * @param {String} city - city name
 * @return {Promise.<Object>} city info
 */
function getLatLngByCity(city) {
  var url = 'https://maps.googleapis.com/maps/api/geocode/json';
  return Vue.http.get(url, {address: city})
    .then(function(response) {
      var data = response.data.results[0];
      return {
        placeId: data.place_id,
        city: data.address_components[0].long_name,
        location: data.geometry.location,
        address: data.formatted_address
      };
    });
}
