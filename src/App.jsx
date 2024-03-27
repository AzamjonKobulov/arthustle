import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Lesson from './pages/Lesson';
import Footer from './components/layout/Footer';
import LessonContextProvider from './contexts/LessonContext';
import Navbar from './components/layout/Navbar';
import NavbarContextProvider from './contexts/NavbarContext';

export default function App() {
  return (
    <LessonContextProvider>
      <NavbarContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              index
              element={
                <div className="h-screen text-center">
                  <h1 className="text-4xl font-bold">Home Page</h1>
                  <Link to="/lesson" className="text-brand-main-elem">
                    Go to lesson page
                  </Link>
                </div>
              }
            />
            <Route path="/lesson" element={<Lesson />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </NavbarContextProvider>
    </LessonContextProvider>
  );
}
