import React from "react";
import Map from "./Mapbox";

class Ubicacion extends React.Component {
  render() {
    return (
      <div>
        <center>
          <Map />
        </center>
      </div>
    );
  }
}

export default Ubicacion;
