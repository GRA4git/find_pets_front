import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import CategoryPets from "./page/CategoryPets";
import HomePage from "./page/HomePage";
import Pets from "./page/Pets";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import { useSelector } from "react-redux";
import ErrorPage from "./page/errorPage";
import ContentPets from './page/ContentPets';

function App() {
  const token = useSelector((state) => state.signIn.token);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/category/:id" element={<CategoryPets />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registry" element={<SignUp />} />

        <Route path="/content" element={<ContentPets/>} />

          <Route path="*" element={<ErrorPage />} />


      </Routes>
    </>
  );
}

export default App;
