import React from "react";
import Header from "../header/Header";
import Items from "./Items";

function MainBox() {
  let [isLoaded, setLoad] = React.useState(false);
  let [items, setItems] = React.useState([]);
  let [inputValue, setValue] = React.useState("");
  let [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setItems(users);
      } catch (error) {
        setError(error);
      } finally {
        setLoad(true);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <div className="error-message">
        Something went wrong...{error.message}
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="main-box">
        <Header />
        <Items items={items} />
      </div>
    );
  }
}

export default MainBox;
