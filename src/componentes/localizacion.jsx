import React from "react";

function Localizacion() {
  return (
    <div>
      <iframe
        style={{ width: 600, height: 450, border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDj8XvUPrqysYN3Byj-ZsdCqfrWeRzGcWs"
      ></iframe>
      
    </div>
  );
}

export default Localizacion;
