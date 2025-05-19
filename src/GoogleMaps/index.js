import React, { useMemo } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import './index.css';

const center = {
    lat: -22.908220891703593,
    lng: -43.28237361618256
};

const mapOptions = {
    disableDefaultUI: false,
    clickableIcons: true,
    scrollwheel: true,
};

function GoogleMaps() {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY        
    });

    const renderMap = useMemo(() => {
        return (
            <GoogleMap
                zoom={16}
                center={center}
                mapContainerClassName="map-container"
                options={mapOptions}
            >
                <MarkerF
                    position={center}
                    label={{
                        text: "Lar Geriátrico Coração de Maria",
                        className: "map-marker-label",
                        anchor: new google.maps.Point(0, 0)
                    }}
                />
            </GoogleMap>
        );
    }, []);

    if (loadError) return <div>Erro ao carregar o mapa</div>;
    if (!isLoaded) return <div>Carregando...</div>;

    return (
        <>
            {renderMap}
        </>
    );
}

export default GoogleMaps;
