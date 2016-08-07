import geo from './data/geo.json';

export default {
  getDetail,
  getBounds
};

function getDetail(obj) {
  return Object.assign({}, obj, geo[obj.placeId]);
}

function getBounds(arr) {
  var bounds = new google.maps.LatLngBounds();
  arr.forEach(item => {
    let latlng = new google.maps.LatLng({
      lat: item.location.lat,
      lng: item.location.lng
    });
    bounds.extend(latlng);
  });
  return bounds;
}
