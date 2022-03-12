require("file-loader?name=[name].[ext]!../index.html");
import React from "react";
import ReactDOM from "react-dom";
import Square from "./Square";

ReactDOM.render(<Square />, document.getElementById("root"));
