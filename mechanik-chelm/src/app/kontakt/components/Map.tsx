'use client'
import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';


type Props = {
    
}

const containerStyle = {
    maxwidth: '1000px',
    height: '400px'
  };

  
  const center = {
    lat:  51.130035645166515,
    lng: 23.47717436754235
  };

const markers = [
  {
    id: 1,
    name: "Elektromechanik Uzarek",
    position: { lat: 51.150641899636675, lng: 23.437774538236383 }
  }
]
 



const Map = (props: Props) => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
   return (
   <div>
    <LoadScript
        googleMapsApiKey="AIzaSyCrNV9GVKnON8t2S3kZUfZf4QunS3TpZb0"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
          title='Elektromechanik Uzarek'
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <h1 className='text-base text-blue-800 '>{name}</h1>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
        </GoogleMap>
      </LoadScript>
   </div>
   )
}

export default Map