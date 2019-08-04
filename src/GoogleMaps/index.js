import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './index.css';

const style = {
    width: '100%',
    height: '100%',
}

const containerStyle = {
    width: '100%',
    height: '400px',
    position: 'relative'
}

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            center: { lat: -22.9085527, lng: -43.2823285 }
        };
    }

    componentDidMount() {
        window.addEventListener('load', this.onMarkerClick);
        window.addEventListener('resize', this.setMapCenter);
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });

    setMapCenter = () => {
        // pull out latitude longitude from wherever you're getting it from
        this.setState({ center: { lat: -22.9085527, lng: -43.2823285 } });
    };

    render() {
        return (
            <Map google={this.props.google}
                zoom={15}
                style={style}
                containerStyle={containerStyle}
                initialCenter={this.state.center}
                center={this.state.center}
            >
                <Marker onClick={this.onMarkerClick} name={'Lar Geriátrico Coração de Mária'} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onInfoWindowClose}
                    position={{ lat: -22.907070, lng: -43.282330 }} >
                    <div>
                        <strong>Endereço: </strong>R. Joaquim Meier, 854 - Lins de Vasconcelos<br></br>
                        <strong>Telefone: </strong> (21)3899-9938<br></br>
                        <strong>Funcionamento: </strong> 8:30 - 19:00 Horas
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY),
    language: ("pt-BR")
})(MapContainer)
