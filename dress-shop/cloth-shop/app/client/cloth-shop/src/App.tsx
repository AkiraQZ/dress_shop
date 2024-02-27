import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/router"
import Navigation from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        <AppRouter />
    </BrowserRouter>
  )
}

export default App
