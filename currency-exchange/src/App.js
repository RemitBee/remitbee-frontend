import {
  BrowserRouter,
  // Switch,
  Routes,
  Route
  // Redirect,
} from "react-router-dom";
import './css/style.css';
// import Navigation from './components/Navigation';  
import Home from './components/Home';
import StoreDetail from './components/StoreDetail'
import AdminRegister from './components/AdminRegister'
import AdminSignIn from './components/AdminSignIn'

function App() {
  return (
    < BrowserRouter>
    <Routes>
      <Route index paht="/" element={ <Home/>} />
      <Route path="/StoreDetail" element={ <StoreDetail/>} />
      <Route path="/AdminRegister" element={ <AdminRegister/>} />
      <Route path="/AdminSignIn" element={ <AdminSignIn/>} />
    </Routes>
  </ BrowserRouter>
//     <BrowserRouter>
//       <div className="App" style={{height:'100vh'}}>
//         <Routes>
//           <Route exact path='/'>
//             <Home/>
//           </Route>
//           <Route exact path='/StoreDetail'>
// <StoreDetail/>
//           </Route>
//         </Routes>
//       </div>
//     </BrowserRouter>
  );
}

export default App;
