import React from "react";
import "./EVENTS.css";
import lf from "./images/lf.JPG";
import murious from "./images/murious.JPG";
import movienight from "./images/movienight.jpeg";
import radio from "./images/radio.jpeg";
import sems from "./images/sems.jpeg";
import mchef from "./images/mchef.png";
import wecare from "./images/wecare.png";
import Card from "../CARDS/CARDS";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
function EVENTS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="event-page">
      <Header />
      <div className="events-head-bg"></div>
      <div className="events-jyc">
        <div className="events-heading">
          Events
          <div className="eventsheading-u" />
        </div>
        <div className="events-container">
          {/* EVENT 6 */}
          <Card
            img={movienight}
            title="MOVIE Night"
            date=""
            about="When you are at college, you are always looking for simple ways to have fun. Movies are the best stress reliever to be able to just forget about your responsibilities and just relax and have fun."
            link="/movie-night"
          />

          <Card
            img={lf}
            title="Le Fiestus"
            date=""
            about="Welcome to 'Le Fiestus' – our college's highly anticipated annual fest that promises three unforgettable days filled with boundless energy, exhilarating activities, and mesmerizing performances. From engaging workshops and competitive sports events to captivating cultural showcases and star-studded musical performances, Le Fiestus offers a diverse range of experiences that cater to every interest. So join us as we celebrate the spirit of camaraderie, creativity, and pure excitement, making memories that will last a lifetime. Get ready to immerse yourself in the vibrant atmosphere of Le Fiestus and unleash the true essence of college life."
            link="/le-fiestus"
          />

          <Card
            img={murious}
            title="Murious"
            date=""
            about="Welcome to 'Murious' – our college's highly anticipated annual tech fest that spans three action-packed days dedicated to innovation, technology, and limitless possibilities. Get ready to witness the brightest minds competing in a myriad of exhilarating tech competitions that cover a wide spectrum of disciplines, ranging from coding challenges and robotics competitions to hackathons and design showcases."
            link="/murious"
          />

          <Card
            img={sems}
            title="Semester Tournament"
            date=""
            about="A tournament which brings together all the sports enthusiasts. From basketball to cricket ,chess to badminton from indoor to outdoors this tournament wraps it all."
            link="/sem-tournaments"
          />

          <Card
            img={radio}
            title="JUIT Radio"
            date=""
            about="Bored of being bored because being bored is boring. 'Radio' Presented by JYC's Literary and Debating Club."
            link="/"
          />

          <Card
            img={wecare}
            title="We-Care"
            date=""
            about="WE-CARE an event organized by the Environment club in coordination with the Omega- Leo club , to create awareness amongst the youngsters and teenagers about tree plantation ,importance of trees for life and much more."
            link="/"
          />
          <Card
            img={mchef}
            title="Master Chef"
            date=""
            about="An event organized to spread awareness about the importance of health."
            link="/"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EVENTS;
