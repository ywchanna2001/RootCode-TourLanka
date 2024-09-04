import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 
import theme from './utils/Theme.jsx'; // Import custom theme

import VisaProcessingHome from './pages/VisaProcessingHome.jsx';
import VisaProcessingPersonal from './pages/VisaProcessingPersonal.jsx';
import VisaProcessingTravel from './pages/ViisaProcessingTravel.jsx'

import VisaApproveTable from './components/VisaApproveTable.jsx';
import VisaRejectTable from './components/VisaRejectTable.jsx';
import VisaRequestedTable from './components/VisaRequestedTable.jsx';

import TourGenerating from './pages/TourGenerating';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
// import theme from './utils/Theme.jsx'; // Import custom theme
import FeatureCard from './components/FeatureCard.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap app with ThemeProvider */}
      <BrowserRouter> {/* BrowserRouter should wrap the entire routing structure */}
        <div className="App" style={{ backgroundColor: '#eceff1' }}>
          <Header /> {/* Move Header inside BrowserRouter */}
          <Routes>

            <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} />
            <Route path="/VisaProcessingPersonal" element={<VisaProcessingPersonal />} />  
            <Route path="/VisaProcessingTravel" element={<VisaProcessingTravel />} />         
            {/* Set TourGenerating as the default route */}
            <Route path="/" element={<TourGenerating />} />
            <Route path="/TourGenerating" element={<TourGenerating />} />
            {/* Add more routes here as needed */}
            {/* <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} /> */}


            <Route path="/VisaRequested" element={<VisaRequestedTable title="Requested visa" />} />
            <Route path="/VisaRejected" element={<VisaRejectTable title="Rejected visa" />} />
            <Route path="/VisaApproved" element={<VisaApproveTable title="Approved visa"  />} />


            <Route path="/AdminDashboard" element={<FeatureCard />} />
          </Routes>
          <Footer /> {/* Move Footer inside BrowserRouter */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
