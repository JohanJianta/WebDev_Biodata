import { useState } from "react";
import HeaderNav from "./javascript/HeaderNav";
import Profile from "./javascript/Profile";
import Biodata from "./javascript/Biodata";
import Form from "./javascript/Form";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("Form");

  return (
    <>
      <HeaderNav onPageChange={setActivePage} />
      {activePage === "Biodata" && <Biodata />}
      {activePage === "Profile" && <Profile />}
      {activePage === "Form" && <Form onPageChange={setActivePage} />}
    </>
  );
}
