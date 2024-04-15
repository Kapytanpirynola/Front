import React, { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    // Cargar el script de la API de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCjRj4v0UvQsd9Q8PtXOrCwfp63DVgUVN8&callback=initMap`;
    script.defer = true;
    script.async = true;

    window.initMap = initMap;

    document.body.appendChild(script); bm.

    function initMap() {

      const markerLocation = { lat: 28.71323, lng: -106.09 };

      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: markerLocation,
        zoom: 15
      });

      const marker = new window.google.maps.Marker({
        position: markerLocation,
        map: map,
        title: 'Hello World!'
      });
    }

    return () => {
      document.body.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '450px', borderRadius: '10px', margin: 'auto', backgroundColor: 'blue' }}></div>
  );
};

export default GoogleMap;
