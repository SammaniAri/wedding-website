/** @format */

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Itinierary from "./components/Itinierary";
import OurStory from "./components/OurStory";
import Registry from "./components/Registry";
import Rsvp from "./components/Rsvp";
import VenueInfo from "./components/VenueInfo";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurStory />
      <VenueInfo />
      <Itinierary />
      <Registry />
      <Rsvp />
      <Footer />
    </>
  );
}

export default App;
