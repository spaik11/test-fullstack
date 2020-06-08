import React, { useState, useEffect, useContext } from "react";
import { CityContext } from "../Context/CityContext";
import { makeStyles, Grid } from "@material-ui/core";
import Sidebar from "./Sidebar/Sidebar";
import texasProperty from "../../lib/API/texas.json";
import Map from "./Map/Map";
import "./MapPage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
}));

export default function MapPage() {
  const [apiProperty, setApiProperty] = useState([]);
  const { currentCity } = useContext(CityContext);

  useEffect(() => {
    setApiProperty(texasProperty);
    console.log(currentCity);
  }, [currentCity]);

  const classes = useStyles();

  return (
    <Grid container id="main" className={classes.root} spacing={2}>
      <Grid item id="map">
        <Map data={apiProperty} city={currentCity} />
      </Grid>
      <Grid item id="sidebar">
        <Sidebar data={apiProperty} />
      </Grid>
    </Grid>
  );
}
