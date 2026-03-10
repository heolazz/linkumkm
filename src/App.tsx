import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Beranda');
  const [umkmSmartInitialTab, setUmkmSmartInitialTab] = useState('Apa Itu UMKM Smart');

  // Reset scroll to top when page changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeTab={activeTab} onNavigate={setActiveTab} />
      <main className="flex-1">
        {activeTab === 'Beranda' ? (
          <>
            <Hero onNavigate={setActiveTab} />
            <ModuleSection />
            <ProductSection />
            <ConsultationSection onNavigate={setActiveTab} />
            <CTASection />
          </>
        ) : activeTab === 'Rumah BUMN' ? (
          <RumahBUMN />
        ) : activeTab === 'Media' ? (
          <MediaPage />
        ) : activeTab === 'Komunitas' ? (
          <KomunitasPage />
        ) : activeTab === 'Konsultasi' ? (
          <CoachingClinicPage onChatSelect={(coach) => {
            setActiveTab('Chat Pakar');
            window.sessionStorage.setItem('selectedCoach', JSON.stringify(coach));
          }} />
        ) : activeTab === 'Chat Pakar' ? (
          <ChatPakarPage
            coach={JSON.parse(window.sessionStorage.getItem('selectedCoach') || 'null')}
            onBack={() => setActiveTab('Konsultasi')}
          />
        ) : activeTab === 'UMKM Smart' ? (
          <UMKMSmartPage
            initialTab={umkmSmartInitialTab}
            onNavigate={(tab) => {
              if (tab === 'Mulai Skoring') {
                setActiveTab('Mulai Skoring');
              } else {
                setActiveTab(tab);
              }
            }}
          />
        ) : activeTab === 'Mulai Skoring' ? (
          <SkoringPage
            onBack={() => {
              setUmkmSmartInitialTab('Apa Itu UMKM Smart');
              setActiveTab('UMKM Smart');
            }}
            onFinish={() => {
              setUmkmSmartInitialTab('Skoring');
              setActiveTab('UMKM Smart');
            }}
          />
        ) : activeTab === 'Etalase' ? (
          <EtalasePage />
        ) : (
          <div className="pt-32 pb-20 text-center text-gray-400">
            Halaman {activeTab} sedang dalam pengembangan
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
