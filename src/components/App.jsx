import React from "react";
import names from "../names";
import Card from "./card";
import Header from "./header";

function createCard(name) {
  return (
    <Card
      name={name.name}
      content={name.content}
      key={name.id} //must be unique to prevent error. Can't be printed
    />
  );
}

function App() {
  return (
    <>
      <Header />
      <div className="h-screen bg-black">
        <div className="grid max-w-6xl grid-cols-4 gap-4 py-12 mx-auto">
          {/*           REPEATATIVE
          <Card name="Dinesh" content="lorem ipsum" />
          <Card name="Nagamma" content="lorem ipsum" /> */}

          {names.map(createCard)}
        </div>
      </div>
    </>
  );
}

export default App;
