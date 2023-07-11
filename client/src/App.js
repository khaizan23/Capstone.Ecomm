import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Orderinfo from './screens/Orderinfo';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import Editproduct from './screens/Editproduct';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

        <Navbar/>

        <Carousel/>

        <BrowserRouter>

           <Route path='https://kodecaps.netlify.app/login' component={Homescreen} exact/>

           <Route path='https://kodecaps.netlify.app/product/:id' component={Productdescscreen}/>

           <Route path='https://kodecaps.netlify.app/cart' component={Cartscreen}/>

           <Route path='https://kodecaps.netlify.app/register' component={Registerscreen} />

           <Route path='https://kodecaps.netlify.app/login' component={Loginscreen} />

           <Route path='https://kodecaps.netlify.app/orders'component={Ordersscreen}/>

           <Route path='https://kodecaps.netlify.app/orderinfo/:orderid' component={Orderinfo} />

           <Route path='https://kodecaps.netlify.app/profile' component={Profilescreen} />

           <Route path='https://kodecaps.netlify.app/admin' component={Adminscreen}/>
           

        </BrowserRouter>

        <Footer/>

       
        
    </div>
  );
}

export default App;
