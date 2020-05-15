import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Payment from "./Payment";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          variant="contained"
          color="primary"
          type={"button"}
          onClick={() => setOpen(true)}
        >
          {"Open the form"}
        </Button>
        <Payment open={open} handleClose={() => setOpen(false)}></Payment>
      </header>
    </div>
  );
}

export default App;
