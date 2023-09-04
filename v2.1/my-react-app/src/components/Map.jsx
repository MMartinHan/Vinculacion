import React, { useEffect } from 'react';

function MapComponent() {
  useEffect(() => {
    
    const ubicacion = { lat: -0.31272780031266256, lng: -78.44498196008126 }; 
    const mapa = new window.google.maps.Map(document.getElementById('map'), {
      center: ubicacion,
      zoom: 15,
    });

    const marcador = new window.google.maps.Marker({
      position: ubicacion,
      map: mapa,
      title: 'Mi Ubicación',
    });
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default MapComponent;
