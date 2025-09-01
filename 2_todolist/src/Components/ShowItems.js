import React from "react";
import { connect } from "react-redux";

import SingleItem from "./SingleItem";

function ShowItems({ itemName, setItemName, listItems }) {
  return (
    <>
      <div className="showItems">
        {listItems.map((singleItem) => {
          return (
            <SingleItem
              key={singleItem.id}
              details={singleItem}
              itemName={itemName}
              setItemName={setItemName}
            ></SingleItem>
          );
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    listItems: state.listItems.data,
  };
};

export default connect(mapStateToProps)(ShowItems);
