import MainBox from "./main-box/MainBox";
import MenuBox from "./menu-box/MenuBox";
import '../App.css';
import Header from "./header/Header";
import UsersList from "./main-box/UsersList";

export default function Main() {
  return (
    <div className="App">
      <MenuBox />
      <Header/>
      {/* <MainBox /> */}
      Home main
      <UsersList/>
    </div>
  );
}
