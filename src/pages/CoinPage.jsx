import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../Context";
import axios from "axios";
import { SingleCoin } from "../config/api";
import CoinInfo from "../Components/Banner/CoinInfo";
import { LinearProgress, Typography } from "@mui/material";
import { numberWithCommas } from "../Components/CoinTable";
import parse from "html-react-parser";
import "./coin.css";
const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(SingleCoin(id));
      setCoin(data);
    };
    fetchCoin();
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const sidebarStyle = {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  };

  const headingStyle = {
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Montserrat",
  };

  const descriptionStyle = {
    width: "100%",
    fontFamily: "Montserrat",
    padding: 25,
    paddingBottom: 15,
    paddingTop: 0,
    textAlign: "justify",
  };

  const marketDataStyle = {
    alignSelf: "start",
    padding: 25,
    paddingTop: 10,
    width: "100%",
  };

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className="responsive-container">
      <div className="sidebar">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" style={headingStyle}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" style={descriptionStyle}>
          {parse(coin?.description.en.split(". ")[0])}.
        </Typography>
        <div style={marketDataStyle}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={headingStyle}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={headingStyle}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={headingStyle}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
