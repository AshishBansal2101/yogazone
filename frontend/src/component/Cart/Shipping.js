import React, { Fragment, useState, useEffect } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import MetaData from "../layout/MetaData";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import { clearErrors, myOrders } from "../../actions/orderAction";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from "country-state-city";
import { useAlert } from "react-alert";
import CheckoutSteps from "../Cart/CheckoutSteps.js";

const Shipping = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, orders } = useSelector((state) => state.myOrders);
  // const { shippingInfo } = useSelector((state) => {
  //   console.log("state", state);
  //   return state.cart;
  // });
  // console.log("hello", shippingInfo);
  const [address, setAddress] = useState("");
  console.log("hereorders", orders);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [batch, setBatch] = useState("6-7AM");

  let date;
  orders &&
    orders.forEach((item) => {
      date = item.createdAt;
    });

  var date1 = orders ? new Date(date) : 0;

  var date2 = new Date(Date.now());

  console.log("date1", date1);
  console.log("date2", date2);
  var total_seconds = Math.abs(date2 - date1) / 1000;

  var days_difference = Math.floor(total_seconds / (60 * 60 * 24));

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({
        address,
        city,
        state,
        country,
        pinCode,
        phoneNo,
        batch,
      })
    );
    history.push("/order/confirm");
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch]);
  return (
    <Fragment>
      {orders && days_difference < 30 ? (
        <div className="alreadym">Already A Member</div>
      ) : (
        <>
          <MetaData title="Shipping Details" />
          <CheckoutSteps activeStep={0} />
          <div className="shippingContainer">
            <div className="shippingBox">
              <h2 className="shippingHeading">Shipping Details</h2>
              <form
                className="shippingForm"
                encType="multipart/form-data"
                onSubmit={shippingSubmit}
              >
                <div>
                  <HomeIcon />
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div>
                  <LocationCityIcon />
                  <input
                    type="text"
                    placeholder="City"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div>
                  <PinDropIcon />
                  <input
                    type="number"
                    placeholder="Pin Code"
                    required
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                </div>

                <div>
                  <PhoneIcon />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    required
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    size="10"
                  />
                </div>
                <div>
                  <PublicIcon />
                  <select
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Country</option>
                    {Country &&
                      Country.getAllCountries().map((item) => (
                        <option value={item.isoCode} key={item.isoCode}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                {country && (
                  <div>
                    <TransferWithinAStationIcon />
                    <select
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">State</option>
                      {State &&
                        State.getStatesOfCountry(country).map((item) => (
                          <option value={item.isoCode} key={item.isoCode}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                )}
                <div>
                  <PublicIcon />
                  <select
                    required
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                  >
                    <option value="">Choose Batch</option>

                    <option value="6-7AM" key={1}>
                      6-7AM
                    </option>
                    <option value="7-8AM" key={2}>
                      7-8AM
                    </option>
                    <option value="8-9AM" key={3}>
                      8-9AM
                    </option>
                    <option value="5-6PM" key={4}>
                      5-6PM
                    </option>
                  </select>
                </div>
                <input
                  type="submit"
                  value="Continue"
                  className="shippingBtn"
                  disabled={state ? false : true}
                />
              </form>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Shipping;
