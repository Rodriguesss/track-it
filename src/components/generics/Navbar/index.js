import { Link } from "react-router-dom"

import { useContext } from "react";

import UserContext from "../../../utils/context/UserContext"

import { NavbarStyle, Option, ProgressBar } from "./style"

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Navbar() {
  const { percentage } = useContext(UserContext);

  return (
    <NavbarStyle>
      <Link to="/habitos">
        <Option>Hábitos</Option>
      </Link>

      <ProgressBar>
        <Link to="/hoje">
          <CircularProgressbar
            value={percentage}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              textSize: "20px",
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent"
            })}
          />
        </Link>
      </ProgressBar>


      <Link to="/historico">
        <Option>Histórico</Option>
      </Link>
    </NavbarStyle>
  )
}

