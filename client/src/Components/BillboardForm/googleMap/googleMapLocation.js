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


// import React, { Component } from 'react';
// import Map from './draableMarker';

// class MapContainer extends Component {

//     render() {
//         return (
//           // integrated google map
//             <div style={{ margin: '100px' }}>
//                 <Map
//                     google={this.props.google}
//                     center={{ lat: 24.837427899999998, lng: 67.0780055 }}
//                     height='300px'
//                     zoom={15}
//                 />
//             </div>
//         );
//     }
// }

// export default MapContainer;
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
        maxWidth: '700px',
        minWidth: '200px',
    },

    progress: {
        marginTop: '110px',
        marginBottom: '110px',
    },
});


class MapContainer extends Component {
    constructor() {
        super();

        this.state = {
            coords: null
        };

        this.getCurrPosition = this.getCurrPosition.bind(this);
    }


    // componentWillMount() {
    //     //render a funtion for position
    //     this.setPosition();
    // }



    // setPosition() {
    //     //get latitude & longitude
    //     let lat = this.props.latitude
    //     let long = this.props.longitude
    //     navigator.geolocation.getCurrentPosition(position => {
    //         this.setState({
    //             coords:
    //             {
    //                 latitude: position.coords.latitude,
    //                 longitude: position.coords.longitude
    //                 // latitude: lat,
    //                 // longitude: long
    //             }
    //         });
    //         //   this.props.getCoords(this.state.coords)
    //         // console.log('initialset', this.state.coords);
    //     })
    // }

    getCurrPosition({ latitude, longitude }) {
        // this.setState({ coords: { latitude, longitude } })

        let lat = this.props.latitude
        let long = this.props.longitude
        // this.setState({ coords: { lat, long } })
        // this.props.getCoords(this.state.coords)
        // console.log('getcurr', this.state.coords);
        // var location = localStorage.setItem('coords', JSON.stringify(this.state.coords));
        // console.log('latitude', this.props.latitude);
        // console.log('longitude', this.props.longitude);

    }


    render() {
        // const { coords } = this.state;
        const { latitude, longitude } = this.props;

        // var lat = this.props.latitude
        // var long = this.props.longitude
        let coords = { latitude, longitude };
        console.log(coords, 'cooooooooords')
        return (
            <div>
                <div>
                    {
                        coords ? 
                        <MyMapComponent
                            isMarkerShown
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `40vh` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            coords={coords}
                            getCurrentPosition={this.getCurrPosition}
                        />
                            :
                            <center>
                            </center>
                    }
                </div>
            </div>
        )
    }
}




const MyMapComponent = withScriptjs(withGoogleMap((props) =>

    <GoogleMap
        defaultZoom={12}
        // defaultCenter={{ lat: props.coords.latitude, lng: props.coords.longitude }}
        center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
    >
            {/* {props.isMarkerShown && <Marker position={{ lat: props.coords.latitude, lng: props.coords.longitude }} */}

        {props.isMarkerShown && <Marker position={{ lat: props.coords.latitude, lng: props.coords.longitude }}

            draggable={true}
            onDragEnd={position => {
                // console.log(position.latLng.lat(), position.latLng.lng());
                props.getCurrentPosition({ latitude: position.latLng.lat(), longitude: position.latLng.lng() });
            }} />}
    </GoogleMap>
))



MapContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default MapContainer;
