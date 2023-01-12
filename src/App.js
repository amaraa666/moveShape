import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovingShape from './component/Move';
import { useEffect } from "react";


function App() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <MovingShape/>
      </div>
    </>
  );
}

export default App;
