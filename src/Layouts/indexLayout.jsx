import { Link, Outlet } from "react-router-dom";

import CustomButton from "../components/customButton/index";
import style from "./styleSheet.module.css";

const Layouts = () => {
    return (
      <div style = {{    overflow: "hidden"}}>
        <nav className = {style.NavBar}>
            <h1>logo is Here</h1>
          <ul className = {style.NavBar_UL}>
            <li>
              <Link to="/">
                <CustomButton ButtonName = {"Home"}/>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <CustomButton ButtonName = {"Login"}/>
              </Link>
            </li>
            <li>
              <Link to="/"><CustomButton ButtonName = {"Home"}/></Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  };

  export default Layouts;