require("file-loader?name=[name].[ext]!../index.html");
import React from "react";
import ReactDOM from "react-dom";
import Astronauts from "./Astronauts";

ReactDOM.render(<Astronauts />, document.getElementById("root"));
