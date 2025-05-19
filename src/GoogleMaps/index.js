import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import './index.css';

const center = {
    lat: -22.908396,
    lng: -43.294953
};

const mapOptions = {
    disableDefaultUI: false,
    clickableIcons: true,
    scrollwheel: true,
};

function GoogleMaps() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        version: "weekly"
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
                    title="Lar Geriátrico Coração de Maria"
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
