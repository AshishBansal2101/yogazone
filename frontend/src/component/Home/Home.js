import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  return (
    <Fragment>
      {1 == 2 ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="yoga zone" />
          <div className="banner">
            <p>Welcome to</p>
            <h1>Yoga Xone</h1>

            <a href="#container">
              <button>
                Classes <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Asanas</h2>

          <div className="container" id="container">
            <div className="feature1">
              <Card sx={{ maxWidth: 300 }} className="card1">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="http://www.yogadaycelebration.com/assets/images/ushtrasana.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Ushtrasana
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ushtrasana is a Yoga pose in which the body of the
                      practitioner resembles that of a camel. The word ‘Ushtra’
                      is a Sanskrit word
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 300 }} className="card1">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="http://www.yogadaycelebration.com/assets/images/ardhacakrasana.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Chakrasana
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      "ArdhakatiChakrasana” is famous as half waist wheel pose
                      as well. The bend from the waist sideways in this asana
                      resembles the wheel
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 300 }} className="card1">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="http://www.yogadaycelebration.com/assets/images/gomukhasana.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gomukhasana
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The asana or posture of Gomukhasana has gained immense
                      popularity within the Yoga community. The asana, whose
                      name literally translates
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="memb">
              <Link to="/shipping" className="memlink">
                Purchase Membership
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
