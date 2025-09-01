import React, { useState } from "react";

import "./App.css";
import NameLogo from "./Components/NameLogo";
import InputFieldAndButton from "./Components/InputFieldAndButton";
import ShowItems from "./Components/ShowItems";

function App() {
  const [itemName, setItemName] = useState("");

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          {/* for logo and title */}
          <NameLogo></NameLogo>

          {/* add item section */}
          <InputFieldAndButton
            itemName={itemName}
            setItemName={setItemName}
          ></InputFieldAndButton>

          {/* show items section */}
          <ShowItems itemName={itemName} setItemName={setItemName}></ShowItems>
        </div>
      </div>
    </>
  );
}

export default App;
