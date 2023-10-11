import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

const SelectedLocation = () => {
    const [selectedLocation, setSelectedLocation] = React.useState({
        lat: 37.78825,
        lng: -122.4324,
    });

    const handleMapClick = (event) => {
        setSelectedLocation(event.latLng);
    };

    return (
        <div>
            <GoogleMap
                center={selectedLocation}
                zoom={15}
                onClick={handleMapClick}
            >
                <Marker position={selectedLocation} />
            </GoogleMap>
        </div>
    );
};