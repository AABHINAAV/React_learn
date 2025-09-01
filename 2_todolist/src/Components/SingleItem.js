import React from "react";
import { connect } from "react-redux";

import {
  removeItemActionFunc,
  updateItemActionFunc,
} from "../Redux_Files/Action_Files/listActions";

function SingleItem({
  itemName,
  setItemName,
  details,
  removeItemFunc,
  updateItemFunc,
}) {
  function setFieldEmptyAndUpdateItemName() {
    let id = details.id;
    let newValue = itemName;

    setItemName("");

    updateItemFunc(id, newValue);
  }

  return (
    <>
      <div className="item">
        <div className="itemname">{details.value}</div>
        <div className="btnsSet">
          <input
            type="button"
            value="🖊"
            className="editBtn"
            onClick={setFieldEmptyAndUpdateItemName}
          />
          <input
            type="button"
            value="❌"
            className="removeBtn"
            onClick={() => {
              removeItemFunc(details.id);
            }}
          />
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFunc: (id) => dispatch(removeItemActionFunc(id)),
    updateItemFunc: (id, newValue) =>
      dispatch(updateItemActionFunc(id, newValue)),
  };
};

export default connect(null, mapDispatchToProps)(SingleItem);
