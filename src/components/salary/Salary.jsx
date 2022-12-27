/* import MainBox from "./main-box/MainBox";
import MenuBox from "./menu-box/MenuBox"; 
import '../App.css';*/

import Header from "../header/Header";
import MenuBox from "../menu-box/MenuBox";

export default function Salary() {
  return (
    <div className="App">
      <MenuBox />
      <Header />
      <h1>Salary</h1>
    </div>
  );
}
