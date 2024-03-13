import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilmsPage } from "./pages/FilmsPage";
import { ActorsPage } from "./pages/ActorsPage";
// import { FilmsPage } from "./pages/FilmsPageReduxStyle";

export function AppRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path='/films' element={<FilmsPage />} />
      <Route path='/actors' element={<ActorsPage />} />
    </Routes>
  </BrowserRouter>;
}