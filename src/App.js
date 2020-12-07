import "./App.css";
import ProductTable from "./ProductTable";

function App() {
  const product = [
    {
      name: "Moteur",
      category: "Automobile",
      price: "1000€",
    },
    {
      name: "Jante",
      category: "Automobile",
      price: "800€",
    },
    {
      name: "Pneu",
      category: "Automobile",
      price: "400€",
    },
  ];
  return (
    <div className="App">
      <ProductTable product={product} />
    </div>
  );
}

export default App;
