import './App.css'
import Navbar from './components/navbar/Navbar';
import AddOns from './containers/add-ons/Addons';
import Footer from './containers/footer/Footer';
import Offers from './containers/offers/Offers';
import Clients from './containers/clients/Clients';
import Questions from './containers/questions/Questions';

function App() {
  return(
    <>
      <Navbar/>
      <Offers/>
      <AddOns/>
      <Clients/>
      <Questions/>
      <Footer/>
    </>
  );
}

export default App
