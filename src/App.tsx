import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import GettingStartedPage from './pages/GettingStartedPage';
import CoreConceptsPage from './pages/CoreConceptsPage';
import ConfigurationPage from './pages/ConfigurationPage';
import ExtensibilityPage from './pages/ExtensibilityPage';
import HowTosPage from './pages/HowTosPage';
import ApiReferencePage from './pages/ApiReferencePage';
import FaqPage from './pages/FaqPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getting-started" element={<GettingStartedPage />} />
          <Route path="/core-concepts" element={<CoreConceptsPage />} />
          <Route path="/configuration" element={<ConfigurationPage />} />
          <Route path="/extensibility" element={<ExtensibilityPage />} />
          <Route path="/how-tos" element={<HowTosPage />} />
          <Route path="/api-reference" element={<ApiReferencePage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
