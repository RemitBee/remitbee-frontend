import Navigation from "./Navigation";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { GoogleMap, StandaloneSearchBox, Marker } from "@react-google-maps/api";
import React from "react";
import Popup from 'reactjs-popup';
import CurrencyCovert from "./CurrencyConverter";
import 'react-dropdown/style.css';
import '../css/CurrencyConverter.css';
import SearchBarCard from './searchbar';
import currencyImage from '../img/c.png';

let markerArray = [];
class Home extends React.Component{
  state = {
    currentLocation: { lat: 0, lng: 0 },
    markers: [],
    bounds: null
  };

  onMapLoad = map => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        this.setState({ currentLocation: pos });
      }
    );
    // google.maps.event.addListener(map, "bounds_changed", () => {
    //   console.log(map.getBounds());
    //   this.setState({ bounds: map.getBounds() });
    // });
  };

  onSBLoad = ref => {
    this.searchBox = ref;
  };

  onPlacesChanged = () => {
    markerArray = [];
    let results = this.searchBox.getPlaces();
    for (let i = 0; i < results.length; i++) {
      let place = results[i].geometry.location;
      markerArray.push(place);
    }
    this.setState({ markers: markerArray });
    console.log(markerArray);
  };

 PopupGfg() {
    return (
        <div>
            <h4>Popup - GeeksforGeeks</h4>
            <Popup trigger=
                {<button> Click to open popup </button>}
                position="right center">
                <div>GeeksforGeeks</div>
                <button>Click here</button>
            </Popup>
        </div>
    )
};

   render(){
    return (
      <div className="" style={{height:'100vh'}}>
      <Navigation></Navigation>
     <div >
     <div style={{padding:'10px 100px 10px 100px'}}>
     <Card className="p-4 p-xl-2 my-xl-3" >
            <Row className="mb-15">
              <Col>
              <Form.Control placeholder={"Select Location"}  type="location" name="location" className="my-2"  autoComplete="location" required="required" readOnly onClick={this.PopupGfg}/>
      {/* <div>
        <div id="searchbox">
          <StandaloneSearchBox
            onLoad={this.onSBLoad}
            onPlacesChanged={this.onPlacesChanged}
            bounds={this.state.bounds}
          >
            <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}
            />
          </StandaloneSearchBox>
        </div>
        <br />
        <div>
          <GoogleMap
            center={this.state.currentLocation}
            zoom={10}
            onLoad={map => this.onMapLoad(map)}
            mapContainerStyle={{ height: "400px", width: "800px" }}
          >
            {this.state.markers.map((mark, index) => (
              <Marker key={index} position={mark} />
            ))}
          </GoogleMap>
        </div>
      </div> */}
                    </Col>
            </Row>   
          </Card>
          <Card className="p-4 p-xl-2 my-xl-3" >
          <CurrencyCovert></CurrencyCovert>
          </Card>
          </div>
          <div style={{padding:'10px 500px 10px 500px'}}>
          <Card className="p-4 p-xl-2 my-xl-3">
          <SearchBarCard></SearchBarCard>
          </Card>
          </div>
     </div>
  </div>
    );
   }
  }
   
export default Home;