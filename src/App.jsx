import { useState } from 'react'
import Navigation from './components/Navigation.jsx';
import Contact from './components/pages/Contact.jsx';
import About from './components/pages/About.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Resume from './components/pages/Resume.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

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
      <main className="main-content mx-3">{renderPage()}</main>
      <Footer />
    </div>
  );
}
