require("file-loader?name=[name].[ext]!../index.html");
import React from "react";
import ReactDOM from "react-dom";
import ShoppingCart from "./ShoppingCart";

ReactDOM.render(<ShoppingCart />, document.getElementById("root"));
