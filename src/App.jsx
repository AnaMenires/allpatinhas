import CategoriaAnimais from "./components/CategoriaAnimais";
import Footer from "./components/Footer";
import PrimeiraSecao from "./components/PrimeiraSecao";
import QuemSouEu from "./components/QuemSouEu";
import Servicos from "./components/Servicos";
import "./index.css";

function App() {
  

  return <div className="flex flex-col  ">
  <PrimeiraSecao />
  <CategoriaAnimais />
  <Servicos />
  <QuemSouEu />
  <Footer />
  </div>;
}

export default App;
