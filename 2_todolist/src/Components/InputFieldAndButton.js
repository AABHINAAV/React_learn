import React, { useState } from "react";
import { connect } from "react-redux";

import { addItemActionFunc } from "../Redux_Files/Action_Files/listActions";

function InputFieldAndButton({ itemName, setItemName, addItemFunc }) {
  function callAddItemActionFunc() {
    if (itemName === "") {
      return;
    }

    const value = itemName;
    const id = new Date().getTime().toString();

    addItemFunc(id, value);

    setItemName("");
  }

  return (
    <>
      <div className="addItems">
        <input
          type="text"
          placeholder="🍔 Add Your Item..."
          className="field"
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <input
          type="button"
          value="+"
          className="addbtn"
          onClick={callAddItemActionFunc}
        />
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemFunc: (id, value) => dispatch(addItemActionFunc(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(InputFieldAndButton);
