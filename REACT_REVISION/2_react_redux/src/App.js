import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parent1 from "./COMPONENTS/Parent1";
import Parent2 from "./COMPONENTS/Parent2";
import HomePage from "./COMPONENTS/HomePage";
import Child1 from "./COMPONENTS/CHILDS/Child1";
import Child2 from "./COMPONENTS/CHILDS/Child2";
import { fetchUserDataFromAPI } from "./REDUX/ACTIONS/userAction";
import { connect } from "react-redux";
import { useState } from "react";
import { fetchFollwersDataFromAPI } from "./REDUX/ACTIONS/folllwersAction";

function App(props) {
  let [userid, setUserId] = useState("");

  const fetchData = () => {
    console.log(userid);
    props.fetchDataFromAPIFun(userid);
  };

  const fetchFollwersData = () => {
    props.fetchFollwersDataFromAPIFun(props.userData.data.followers_url);
  };

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/Parent1" element={<Parent1></Parent1>}></Route>
        <Route path="/Parent2" element={<Parent2></Parent2>}>
        <Route path="Child1" element={<Child1></Child1>}></Route>
        <Route path="Child2" element={<Child2></Child2>}></Route>
        </Route>
        </Routes>
      </BrowserRouter> */}
      {/*  */}
      {/*  */}
      {/*  */}
      {JSON.stringify(props.userData)}
      <hr />
      {JSON.stringify(props.userData.data.followers_url)}
      <hr />
      {JSON.stringify(props.follwersData)}
      <br />
      <br />
      <hr />
      <input
        type="text"
        value={userid}
        onChange={(event) => {
          setUserId(event.target.value);
        }}
      />
      <br />
      <button onClick={fetchData}>get data</button>
      <br />
      <button onClick={fetchFollwersData}>fetch follwers</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
    follwersData: state.followers.followers_data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataFromAPIFun: (userid) => dispatch(fetchUserDataFromAPI(userid)),
    fetchFollwersDataFromAPIFun: (url) =>
      dispatch(fetchFollwersDataFromAPI(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
