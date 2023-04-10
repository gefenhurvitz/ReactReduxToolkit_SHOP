import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage';
// import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MyNavbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Header />
      <MyNavbar />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            {/* <Route path='/product/:id' element={<ProductPage />} /> */}
            {/* <Route path='/cart/:id?' element={<CartPage />} /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
