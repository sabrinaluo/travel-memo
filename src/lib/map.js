import mapStyle from './mapStyle.json';
// import historyList from './history.json';
// import cityList from '';
// import timeline from '';

function init() {
  window.map = new google.maps.Map(document.getElementById('google-map'), {
    minZoom: 1,
    maxZoom: 7,
    streetViewControl: false,
    mapTypeControl: false
  });
  var normcore = new google.maps.StyledMapType(mapStyle);
  map.mapTypes.set('normcore', normcore);
  map.setMapTypeId('normcore');

  var position = {
    lat: 33.2304160,
    lng: 121.4737010
  };

  var latlngbounds = new google.maps.LatLngBounds();
  var latlng = new google.maps.LatLng(position);
  latlngbounds.extend(latlng);
  window.map.fitBounds(latlngbounds);
}

function markers() {
  var markers = [];
  return markers;
}

function fitBounds(cityIdList) {
  var latlngList = [];

  cityIdList.forEach(function(city) {
    var lat = markerData[city].position.lat;
    var lng = markerData[city].position.lng;
    latlng = new google.maps.LatLng({
      lat: lat,
      lng: lng
    });
    latlngList.push(latlng);
  });

  var latlngbounds = new google.maps.LatLngBounds();
  latlngList.forEach(function(item) {
    latlngbounds.extend(item);
  });

  map.fitBounds(latlngbounds);
}
function whereToGo() {
  return getRandomCity().then(getLatLngByCity).then(function(city) {
    var position = city.position;
    var latlngbounds = new google.maps.LatLngBounds();
    var latlng = new google.maps.LatLng(position);
    latlngbounds.extend(latlng);
    map.fitBounds(latlngbounds);

    return new google.maps.Marker({
      position: position,
      map: map,
      title: city.name,
      icon: '//maps.gstatic.com/mapfiles/ridefinder-images/mm_20_blue.png',
      animation: google.maps.Animation.DROP
    });
  });
}

function getRandomCity() {
  var cityId = (Math.random() * 1350) | 0;
  var start = cityId;
  var index = cityId % 20;
  var url = 'https://api.douban.com/v2/loc/list?start=' + start;

  return getData(url, true).then(function(data) {
    var city = data.locs[index].name;
    return city;
  });
}

function getLatLngByCity(city) {
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city;
  return getData(url).then(function(data) {
    return {
      id: data.results[0].place_id,
      name: city,
      position: data.results[0].geometry.location
    };
  });
}

function getData(url, cors) {
  cors = cors || false;
  return new Promise(function(resolve, reject) {
    var options = {
      url: url,
      success: resolve,
      error: reject
    };

    if (cors === true) {
      options.dataType = 'jsonp';
    }

    $.ajax(options);
  });
}

export default{
  init: init,
  markers: markers,
  fitBounds: fitBounds,
  whereToGo: whereToGo
};
