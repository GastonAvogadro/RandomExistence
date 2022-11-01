import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/Pages/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/Pages/CartContainer/CartContainer';
import { NotFound404 } from './components/Pages/NotFound404/NotFound404';
import { CartContextProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
                <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route path='/NotFound404' element={<NotFound404 />} />
                <Route path="*" element={<Navigate to="/NotFound404" />} />
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;
