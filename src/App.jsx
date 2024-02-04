import { useState } from 'react'
import Navigation from './components/Navigation';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
// Import our custom CSS
// import '../scss/App.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      {/* passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calls the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
      <Footer />
    </div>
  );
}
