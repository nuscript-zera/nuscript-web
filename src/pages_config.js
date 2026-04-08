import About from './pages/About';
import ClinicalDocumentation from './pages/ClinicalDocumentation';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MedicalCoding from './pages/MedicalCoding';
import MedicoLegalTranscription from './pages/MedicoLegalTranscription';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RevenueCycleManagement from './pages/RevenueCycleManagement';
import TermsOfUse from './pages/TermsOfUse';
import __Layout from './Layout.jsx';

export const PAGES = {
    "About": About,
    "ClinicalDocumentation": ClinicalDocumentation,
    "Contact": Contact,
    "Home": Home,
    "MedicalCoding": MedicalCoding,
    "MedicoLegalTranscription": MedicoLegalTranscription,
    "PrivacyPolicy": PrivacyPolicy,
    "RevenueCycleManagement": RevenueCycleManagement,
    "TermsOfUse": TermsOfUse,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
