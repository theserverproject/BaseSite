import React from 'react';
import Navbar from './pages/Home/components/Navbar/Navbar';
import Main from './pages/Home/components/Main/Main';
import Footer from './pages/Home/components/Footer/Footer';

// Import App CSS classes.
import './AppCssColors.css';
import './App.css';

//Import Home Page CSS classes.
import './pages/Home/HomePageVariables.css';

function App() {
    return (
        <div id="page-content">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
