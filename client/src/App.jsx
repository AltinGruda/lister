import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <Card />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);