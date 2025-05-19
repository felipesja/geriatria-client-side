import React, { useMemo, useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import './index.css';

const center = {
    lat: -22.908393606941416,
    lng: -43.28239106189875
};

const mapOptions = {
    disableDefaultUI: false,
    clickableIcons: true,
    scrollwheel: true,
};

function GoogleMaps() {
    const [showInfoWindow, setShowInfoWindow] = useState(true);

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,        
    });

    const renderMap = useMemo(() => {
        if (!isLoaded) return <div>Carregando...</div>;

        return (
            <GoogleMap
                zoom={16}
                center={center}
                mapContainerClassName="map-container"
                options={mapOptions}
            >
                <MarkerF
                    position={center}
                    onClick={() => setShowInfoWindow(!showInfoWindow)}
                />
                {showInfoWindow && (
                    <InfoWindowF
                        position={center}
                        options={{
                            pixelOffset: new window.google.maps.Size(0, -40),
                            ariaLabel: 'InfoWindow',
                            headerDisabled: true,                            
                        }}
                    >
                        <div className="info-window-content">
                            <p><strong>Endereço: </strong>R. Joaquim Meier, 854 - Lins de Vasconcelos</p>
                            <p><strong>Telefone: </strong>(21) 3899-9938 | (21) 2597-5999</p>
                            <p><strong>Funcionamento: </strong>8:00 às 17:00 Horas</p>
                        </div>
                    </InfoWindowF>
                )}
            </GoogleMap>
        );
    }, [isLoaded, showInfoWindow]);

    if (loadError) return <div>Erro ao carregar o mapa</div>;
    if (!isLoaded) return <div>Carregando...</div>;

    return renderMap;
}

export default GoogleMaps;
