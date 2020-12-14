import React from "react";
import "./homepage.css";
import Directory from '../../directory/directory'


const HomePage = ({history}) => {
  return (
    <div className="homepage">
     <Directory />
    </div>
  );
};

export default HomePage;
