import { BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import NotFound from './components/NotFound/NotFound';
import Prices from './components/PricePackages/Prices';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SingleService from './components/Service/SingleService';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';
import initFirebaseAuth from './Firebase/firebase.init';

initFirebaseAuth()

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>    
     <Header></Header>
     <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/service" element={<PrivateRoute>
              <Services />
            </PrivateRoute>}/>
          <Route path="/service/:id" element={<PrivateRoute>
              <SingleService />
            </PrivateRoute>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/price" element={<PrivateRoute>
              <Prices />
            </PrivateRoute>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
     </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
