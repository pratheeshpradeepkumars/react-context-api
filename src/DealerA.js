import React from "react";

import { CarContextConsumer } from "./CarContext";

const DealerA = props => {
  const obj = new props.CarContextProvider();
  const newState = { ...obj.state };
  const objVal = {};
  newState.models.forEach(model => {
    objVal[model] = 0;
  });
  const [modelObj, setModelCount] = React.useState(objVal);

  const addStock = item => {
    setModelCount({ ...modelObj, [item]: modelObj[item] + 1 });
  };

  React.useEffect(() => {}, []);

  return (
    <CarContextConsumer>
      {value => (
        <div
          style={{
            border: "1px solid limegreen",
            padding: ".5rem",
            margin: ".5rem"
          }}
        >
          <h2>Dealer A</h2>
          <p>Company : {value.company}</p>
          <p>Models: {value.models.join(", ")}</p>
          {newState.models.map(item => (
            <p key={item}>
              {item} : {modelObj[item]}
              <button
                style={{ marginLeft: "1rem" }}
                onClick={addStock.bind(this, item)}
              >
                +
              </button>
            </p>
          ))}
        </div>
      )}
    </CarContextConsumer>
  );
};

export default DealerA;
