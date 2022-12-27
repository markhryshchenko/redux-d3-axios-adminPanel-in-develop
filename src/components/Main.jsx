import MainBox from "./main-box/MainBox";
import MenuBox from "./menu-box/MenuBox";
import '../App.css';

export default function Main() {
  return (
    <div className="App">
      <MenuBox />
      <MainBox />
    </div>
  );
}
