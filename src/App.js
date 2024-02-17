
import React,{ useEffect, useState, useContext } from 'react';
import Routings from './Routings';
import { auth } from "./Utility/Firebase.jsx";
import { DataContext } from "./Components/Dataprovider/Dataprovider.jsx";
import { Type } from "./Utility/Actiontype.jsx";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return <Routings/>
}

export default App;
