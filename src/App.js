import React from "react";
import "./App.css";
 
import Posts from "./Components/Posts";
import Navbar from "./Components/BlogNav"
 
const App = () => {
    return (
        <div className="main-container" style={{backgroundColor: "aliceblue"}}>
            <Navbar />
            <Posts />
        </div>
    );
};
 
export default App;