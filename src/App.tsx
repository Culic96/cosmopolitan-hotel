import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import "./App.css";
import About from './components/About';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
function App({ pageProps }: any) {

  return (
    <>
      {/* <AnyComponent {...pageProps} /> */}
      {/* <Home {...pageProps} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="#About" element={<About />}></Route > */}
          <Route path="/Rooms" element={<Rooms />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
