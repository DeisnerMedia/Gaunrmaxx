import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={20}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 49.774140,
                        lng: 9.939766
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBRf4TtITqCfRsh4lqpcd229ebW33rmeWQ'
})(MapContainer);