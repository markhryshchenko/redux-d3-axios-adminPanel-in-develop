
import Main from "./components/Main";
import "react-router-dom";
import { BrowserRouter,  Route, Routes, } from "react-router-dom";
function App() {
  return (
  
     <BrowserRouter>
     <Routes>

       <Route path="/" element={<Main  />} />;
       {/* <Route path="/registr" element={<RegistrForm />} />;
       <Route path='/login' element={<LoginForm />} />
       <Route path='/itemDetails/:id' element={<ItemDetails />} />
       <Route path='/itemDetails/:id/edit' element={<EditItem />} />
       <Route path='/addnew' element={<AddNewFilm  />} /> */}
       <Route path="*" element= {<h1>Page not found</h1>} />
       
     </Routes>
   </BrowserRouter>

  );
}

export default App;
