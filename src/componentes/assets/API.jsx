import React, { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    // Cargar el script de la API de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCjRj4v0UvQsd9Q8PtXOrCwfp63DVgUVN8&callback=initMap`;
    script.defer = true;
    script.async = true;

    // Asignar el callback 'initMap' para inicializar el mapa cuando se cargue el script
    window.initMap = initMap;

    // Agregar el script al final del body
    document.body.appendChild(script);

    // Función para inicializar el mapa
    function initMap() {
      // Ubicación del marcador
      const markerLocation = { lat: 28.71323, lng: -106.09 };

      // Configuración inicial del mapa
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: markerLocation,
        zoom: 15
      });

      // Crear un marcador en la ubicación especificada
      const marker = new window.google.maps.Marker({
        position: markerLocation,
        map: map,
        title: 'Hello World!'
      });
    }

    // Limpiar el script y la función de callback cuando el componente se desmonta
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
