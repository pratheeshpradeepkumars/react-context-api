import React from "react";

const BikeContext = React.createContext();

export class BikeContextProvider extends React.Component {
  state = {
    models: ["Pulsur 150", "Pulsur 180", "Pulsur 200", " 400"],
    company: "Bajaj"
  };

  render() {
    return (
      <BikeContext.Provider value={this.state}>
        {this.props.children}
      </BikeContext.Provider>
    );
  }
}

export const BikeContextConsumer = BikeContext.Consumer;
