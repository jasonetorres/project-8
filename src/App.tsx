import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Guidelines from './pages/Guidelines';
import FAQ from './pages/FAQ';
import MentorshipProgram from './pages/MentorshipProgram';
import AmbassadorProgram from './pages/AmbassadorProgram';
import AboutUs from './pages/AboutUs';
import { Card } from './components/Card'; // Import the Card component
import UserSurvey from './pages/UserSurvey';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="guidelines" element={<Guidelines />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="mentorship" element={<MentorshipProgram />} />
          <Route path="ambassador" element={<AmbassadorProgram />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="card-page" element={
            <Card>
              <UserSurvey />
            </Card>
          } /> {/* Add the Card route with DeveloperSurvey as a child */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
