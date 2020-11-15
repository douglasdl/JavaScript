// Initialize and add the map
function initMap(): void {
  // The location of Uluru
  const uluru = { lat: 34.8270674, lng: 135.6102668 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 8,
      center: uluru,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}