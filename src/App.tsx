import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Home/Hero';
import ModuleSection from './components/Home/ModuleSection';
import ProductSection from './components/Home/ProductSection';
import ConsultationSection from './components/Home/ConsultationSection';
import CTASection from './components/Home/CTASection';
import RumahBUMN from './pages/RumahBUMN';
import MediaPage from './pages/MediaPage';
import KomunitasPage from './pages/KomunitasPage';
import UMKMSmartPage from './pages/UMKMSmartPage';
import CoachingClinicPage from './pages/CoachingClinicPage';
import ChatPakarPage from './pages/ChatPakarPage';
import EtalasePage from './pages/EtalasePage';
import SkoringPage from './pages/SkoringPage';

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [umkmSmartInitialTab, setUmkmSmartInitialTab] = useState('Apa Itu UMKM Smart');

  // Map path to active navigation item for Navbar highlight
  const getActiveTabFromPath = (path: string) => {
    if (path === '/') return 'Beranda';
    if (path.startsWith('/rumah-bumn')) return 'Rumah BUMN';
    if (path.startsWith('/media')) return 'Media';
    if (path.startsWith('/komunitas')) return 'Komunitas';
    if (path.startsWith('/konsultasi')) return 'Konsultasi';
    if (path.startsWith('/chat-pakar')) return 'Chat Pakar';
    if (path.startsWith('/umkm-smart')) return 'UMKM Smart';
    if (path.startsWith('/skoring')) return 'Mulai Skoring';
    if (path.startsWith('/etalase')) return 'Etalase';
    return 'Beranda';
  };

  const activeTab = getActiveTabFromPath(location.pathname);

  const handleNavigate = (tab: string) => {
    switch (tab) {
      case 'Beranda': navigate('/'); break;
      case 'Rumah BUMN': navigate('/rumah-bumn'); break;
      case 'Media': navigate('/media'); break;
      case 'Komunitas': navigate('/komunitas'); break;
      case 'Konsultasi': navigate('/konsultasi'); break;
      case 'Chat Pakar': navigate('/chat-pakar'); break;
      case 'UMKM Smart': navigate('/umkm-smart'); break;
      case 'Mulai Skoring': navigate('/skoring'); break;
      case 'Etalase': navigate('/etalase'); break;
      default: navigate('/');
    }
  };

  // Reset scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeTab={activeTab} onNavigate={handleNavigate} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <>
              <Hero onNavigate={handleNavigate} />
              <ModuleSection />
              <ProductSection />
              <ConsultationSection onNavigate={handleNavigate} />
              <CTASection />
            </>
          } />
          <Route path="/rumah-bumn" element={<RumahBUMN />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/komunitas" element={<KomunitasPage />} />
          <Route path="/konsultasi" element={
            <CoachingClinicPage onChatSelect={(coach) => {
              window.sessionStorage.setItem('selectedCoach', JSON.stringify(coach));
              navigate('/chat-pakar');
            }} />
          } />
          <Route path="/chat-pakar" element={
            <ChatPakarPage
              coach={JSON.parse(window.sessionStorage.getItem('selectedCoach') || 'null')}
              onBack={() => navigate('/konsultasi')}
            />
          } />
          <Route path="/umkm-smart" element={
            <UMKMSmartPage
              initialTab={umkmSmartInitialTab}
              onNavigate={(tab) => {
                if (tab === 'Mulai Skoring') {
                  navigate('/skoring');
                } else {
                  handleNavigate(tab);
                }
              }}
            />
          } />
          <Route path="/skoring" element={
            <SkoringPage
              onBack={() => {
                setUmkmSmartInitialTab('Apa Itu UMKM Smart');
                navigate('/umkm-smart');
              }}
              onFinish={() => {
                setUmkmSmartInitialTab('Skoring');
                navigate('/umkm-smart');
              }}
            />
          } />
          <Route path="/etalase" element={<EtalasePage />} />
          <Route path="*" element={
            <div className="pt-32 pb-20 text-center text-gray-400">
              Halaman tidak ditemukan
            </div>
          } />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
