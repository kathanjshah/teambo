import homeimg from "../../Assets/letter-t.png";
import TemporaryDrawer from "./drawer";
import "./header.css";
import * as React from "react";
import { useMediaQuery } from "@mui/material";

function Header() {
  const matches = useMediaQuery("(min-width:720px)");
  return (
    <div className="header">
      <div>
        <div className="title"></div>
        <img className="homeimg" src={homeimg} />
        <div>TeamBo</div>
      </div>

      {matches ? (
        <div className="groupicons">
          <div className="clickicons">Choose Packet</div>
          <div className="clickicons">Program</div>
          <div className="clickicons">Pricing</div>
          <div className="clickicons">Help & Center</div>
        </div>
      ) : null}
      {matches ? <div className="getstarted"> Get Started</div> : null}
      {matches ? null : <TemporaryDrawer></TemporaryDrawer>}
    </div>
  );
}

export default Header;
