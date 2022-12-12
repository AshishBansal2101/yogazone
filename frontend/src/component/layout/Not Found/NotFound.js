import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>Page Not Found </Typography>
      <Link to="/">Home</Link>
      <button onClick={refreshPage}>Please Refresh</button>
    </div>
  );
};

export default NotFound;
