import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminRoute } from "./routes/AdminRoute";
import { UserRoute } from "./routes/UserRoute";

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <UserRoute />
        <AdminRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
