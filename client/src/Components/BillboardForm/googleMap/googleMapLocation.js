// import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// class MapContainer extends Component {
//     render() {
//       return (
//         <Map google={this.props.google} zoom={14}>
   
//           <Marker onClick={this.onMarkerClick}
//                   name={'Current location'} />
   
//           <InfoWindow onClose={this.onInfoWindowClose}>
//               <div>
//                 {/* <h1>{this.state.selectedPlace.name}</h1> */}
//               </div>
//           </InfoWindow>
//         </Map>
//       );
//     }
//   }

// //   export default MapContainer;
//   export default GoogleApiWrapper({
//     apiKey: ("AIzaSyCVaaKYPs3m81hrt-pDIbTE9Y-vNP-ZsZw")
//   })(MapContainer)


import React, { Component } from 'react';
import Map from './draableMarker';

class MapContainer extends Component {

    render() {
        return (
            <div style={{ margin: '100px' }}>
                <Map
                    google={this.props.google}
                    center={{ lat: 24.837427899999998, lng: 67.0780055 }}
                    height='300px'
                    zoom={15}
                />
            </div>
        );
    }
}

export default MapContainer;
