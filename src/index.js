import React from "react";
import ReactDOM from "react-dom";

import { CarContextProvider } from "./CarContext";
import { BikeContextProvider } from "./BikeContext";

import DealerA from "./DealerA";
import DealerB from "./DealerB";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CarContextProvider>
        <DealerA CarContextProvider={CarContextProvider} />
        <BikeContextProvider>
          <DealerB />
        </BikeContextProvider>
      </CarContextProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
