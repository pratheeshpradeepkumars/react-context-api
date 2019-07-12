import React from "react";

const CarContext = React.createContext();

export class CarContextProvider extends React.Component {
  state = {
    models: ["Figo", "Aspire", "Eco Sport", "Mustang"],
    company: "Ford"
  };

  render() {
    return (
      <CarContext.Provider value={this.state}>
        {this.props.children}
      </CarContext.Provider>
    );
  }
}

export const CarContextConsumer = CarContext.Consumer;
