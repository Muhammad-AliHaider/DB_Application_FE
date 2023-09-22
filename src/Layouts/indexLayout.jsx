import { AddMockData, DropAllTables, TablesCreate } from "../dataController/apiFetching/apis";
import { Link, Outlet } from "react-router-dom";

import CustomButton from "../components/customButton/index";
import style from "./styleSheet.module.css";

const Layouts = () => {

    async function handleAddMock(){
      const res = await AddMockData();
      alert("Mock Data Added")

      window.location.reload();
    }

    async function DropTables(){
      const res = await DropAllTables();
      alert("Tables Dropped")
      window.location.reload();
    }

    async function handleCreateTables(){
      const res = await TablesCreate();
      alert("Tables Created")
      window.location.reload();
    }
    return (
      <div style = {{    overflow: "hidden"}}>
        <nav className = {style.NavBar}>
            <h1>logo is Here</h1>
          <ul className = {style.NavBar_UL}>
            <li>
              <Link to="/">
                <CustomButton ButtonName = {"Create Tables"} onhandleClick = {async ()=>handleCreateTables()}/>
              </Link>
            </li>
            <li>
              {/* <Link to="/login"> */}
                <CustomButton ButtonName = {"Add Mock Data"} onhandleClick={async ()=>handleAddMock()}/>
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to="/login"> */}
                <CustomButton ButtonName = {"Drop Tables"} onhandleClick={async ()=> DropTables()}/>
              {/* </Link> */}
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  };

  export default Layouts;