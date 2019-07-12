import React from "react";

import { CarContextConsumer } from "./CarContext";
import { BikeContextConsumer } from "./BikeContext";

const DealerB = () => (
  <CarContextConsumer>
    {value => (
      <div
        style={{ border: "1px solid red", padding: ".5rem", margin: ".5rem" }}
      >
        <h2>Dealer B</h2>
        <h4>Car</h4>
        <p>Company : {value.company}</p>
        <p>Models: {value.models.join(", ")}</p>
        <BikeContextConsumer>
          {bike => (
            <div>
              <h4>Bike</h4>
              <p>Company : {value.company}</p>
              <p>Models: {value.models.join(", ")}</p>
            </div>
          )}
        </BikeContextConsumer>
      </div>
    )}
  </CarContextConsumer>
);

export default DealerB;
