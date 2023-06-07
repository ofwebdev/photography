import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained" sx={{ m: 1 }}>
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}

export default App;
