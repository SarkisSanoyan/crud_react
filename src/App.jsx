import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

import { UsersListPage } from "./pages/users/UsersListPage";
import { AddUserPage } from "./pages/users/AddUserPage";
import { EditUserPage } from "./pages/users/EditUserPage";
import { DetailUserPage } from "./pages/users/DetailUserPage";


export function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/users" element={<UsersListPage />} />
        <Route path="/users/add" element={<AddUserPage />} />
        <Route path="/users/edit/:id" element={<EditUserPage />} />
        <Route path="/users/:id" element={<DetailUserPage />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
      <Footer />
    </>
  )
}

