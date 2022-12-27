/* import MainBox from "./main-box/MainBox";
import MenuBox from "./menu-box/MenuBox";
import '../App.css'; */

import Header from "../header/Header";
import MenuBox from "../menu-box/MenuBox";

export default function Users() {
  return (
    <div className="App">
      <MenuBox />
      <Header />
      <h1>Users</h1>
    </div>
  );
}
