import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Testimonials from '@/pages/Testimonials';
import Faq from '@/pages/Faq';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import HowItWorks from '@/pages/HowItWorks';
import ServicesOverview from '@/pages/services/ServicesOverview';
import SchoolSearch from '@/pages/services/SchoolSearch';
import Advisory from '@/pages/services/Advisory';
import Admission from '@/pages/services/Admission';
import VisaGuide from '@/pages/services/VisaGuide';
import UsaVisa from '@/pages/services/UsaVisa';
import HotelBooking from '@/pages/services/HotelBooking';
import FlightBooking from '@/pages/services/FlightBooking';
import StudentAccommodation from '@/pages/services/StudentAccommodation';
import NursingPathway from '@/pages/services/NursingPathway';
import PremiumPackage from '@/pages/services/PremiumPackage';
import StudyUK from '@/pages/destinations/StudyUK';
import StudyIreland from '@/pages/destinations/StudyIreland';
import StudyCanada from '@/pages/destinations/StudyCanada';
import News from '@/pages/News';
import Privacy from '@/pages/legal/Privacy';
import Terms from '@/pages/legal/Terms';
import Disclaimer from '@/pages/legal/Disclaimer';

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/how-it-works" component={HowItWorks} />
        
        <Route path="/services" component={ServicesOverview} />
        <Route path="/services/school-search" component={SchoolSearch} />
        <Route path="/services/advisory" component={Advisory} />
        <Route path="/services/admission" component={Admission} />
        <Route path="/services/nursing-pathway" component={NursingPathway} />
        <Route path="/services/premium-package" component={PremiumPackage} />
        <Route path="/services/visa-guide" component={VisaGuide} />
        <Route path="/services/usa-visa" component={UsaVisa} />
        <Route path="/services/hotel-booking" component={HotelBooking} />
        <Route path="/services/flight-booking" component={FlightBooking} />
        <Route path="/services/student-accommodation" component={StudentAccommodation} />
        <Route path="/study/uk" component={StudyUK} />
        <Route path="/study/ireland" component={StudyIreland} />
        <Route path="/study/canada" component={StudyCanada} />
        <Route path="/news" component={News} />
        
        <Route path="/legal/privacy" component={Privacy} />
        <Route path="/legal/terms" component={Terms} />
        <Route path="/legal/disclaimer" component={Disclaimer} />
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
