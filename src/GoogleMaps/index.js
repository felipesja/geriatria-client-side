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
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: true,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    render() {
        return (
            <Map google={this.props.google}
                zoom={15}
                style={style}
                containerStyle={containerStyle}
                initialCenter={{
                    lat: -22.9085527,
                    lng: -43.2823285
                }}
            >
                <Marker onLoad={this.onMarkerClick}
                    name={'Lar Geriátrico Coração de Mária'} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <strong>Endereço: </strong>R. Joaquim Meier, 854 - Lins de Vasconcelos<br></br>
                        <strong>Telefone: </strong> (21) 2597-5999<br></br>
                        <strong>Funcionamento: </strong> 8:30 - 19:00 Horas
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("**Api Key Google Maps Here**")
})(MapContainer)
