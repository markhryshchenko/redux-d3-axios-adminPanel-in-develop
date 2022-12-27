import Main from "./components/Main";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Salary from "./components/salary/Salary";
import Users from "./components/users/Users";
import DataPresentation from "./components/dataPresentation/DataPresentation";
import Inbox from "./components/Inbox/Inbox";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/salary" element={<Salary />} />;
        <Route path="/users" element={<Users />} />
        <Route path="/dataPresentation" element={<DataPresentation />} />
        <Route path="/inbox" element={<Inbox />} />
        {/* <Route path='/itemDetails/:id' element={<ItemDetails />} />
       <Route path='/itemDetails/:id/edit' element={<EditItem />} />
      */}
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
