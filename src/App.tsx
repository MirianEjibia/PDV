import { useState } from "react";
import "./App.css";
import MenuAppBar from "./components/AppBar";
import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MenuAppBar />
      <Box display="flex">
      <NavBar />
        <main style={{width: '90%', padding: '0.5rem 0.5rem 1rem '}}>
          <Outlet />
        </main>
      </Box>
      
    </>
  );
}

export default App;
