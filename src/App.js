import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Basket } from "./routes/Basket";
import { Profile } from "./routes/Profile";
import { ItemPage } from "./routes/ItemPage";
import { Previous } from "./routes/Previous";
import { Signup } from "./routes/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/items/:item_id" element={<ItemPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/previous" element={<Previous />} />
      </Routes>
    </div>
  );
}

export default App;
