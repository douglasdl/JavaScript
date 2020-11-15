let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 34.8270674, lng: 135.6102668 },
    zoom: 8,
  });
}