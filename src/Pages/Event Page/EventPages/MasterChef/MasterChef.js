import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import masterchef from "./Assets/masterchef.jpeg";
import masterchef1 from "./Assets/masterchef1.JPG";
import masterchef2 from "./Assets/masterchef2.JPG";
import masterchef3 from "./Assets/masterchef3.JPG";
import masterchef4 from "./Assets/masterchef4.JPG";
import masterchef5 from "./Assets/masterchef5.JPG";

export default function MasterChef() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img={masterchef}
          alt="Masterchef"
          title="Masterchef"
          date="Date: 19th November, 2022"
          about="An extraordinary culinary event that celebrates the talent and passion of aspiring chefs! This highly anticipated competition brings together students who are eager to showcase their culinary skills and creativity. Prepare to be enthralled as these young chefs demonstrate their culinary prowess, serving up incredible dishes and pushing the boundaries of gastronomy. From the sizzle of the pans to the tantalizing aromas, 'MasterChef' promises an exhilarating experience that will leave you inspired and hungry for more.."
          img1={masterchef1}
          alt1="Masterchef"
          img2={masterchef2}
          alt2="Masterchef"
           img3={masterchef3}
          alt3="Masterchef"
          img4={masterchef4}
          alt4="Masterchef"
          img5={masterchef5}
          alt5="Masterchef"
        />
      </div>
      <Footer/>
    </div>
  );
}
