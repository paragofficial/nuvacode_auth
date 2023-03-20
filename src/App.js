// // import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import  {Login} from './Login.js';

// function App() {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route exact path="/" component={Login} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login} from "./Login.js";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;