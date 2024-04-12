import React from 'react';

const GoogleMapComponent = () => {
  return (
    <div>
      <gmp-map center="28.713191986083984,-106.0901870727539" zoom="14" map-id="DEMO_MAP_ID">
        <gmp-advanced-marker position="28.713191986083984,-106.0901870727539" title="My location"></gmp-advanced-marker>
      </gmp-map>
    </div>
  );
};

export default GoogleMapComponent;
