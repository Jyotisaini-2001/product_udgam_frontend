// import logo from './logo.svg';
// import './App.css';
// import ProductList from './pages/productList';
// import Admin from './pages/admin';
// import { Menu } from './pages/Navbar';
// function App() {
//   return (
//     <div className="App">
//       <Menu/>
//       {/* <Admin/> */}
//         <ProductList />

//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import ProductList from './pages/productList';
import Admin from './pages/admin';
import { Menu } from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu /> {/* Render the Menu component */}
        <Routes>
          <Route path="/" element={<ProductList />} /> {/* Wrap ProductList in a Route component */}
          <Route path="/admin" element={<Admin />} /> {/* Wrap Admin in a Route component */}
        </Routes>
      </div>
      <p className='text-gray-300'>Created by Jyoti Saini</p>
    </Router>
  );
}

export default App;
