import React from "react";
import Footer from "../components/Footer";

export default class Home extends React.Component {
  render() {
    const googleProfilePic = "img/PerfilGabrielFuchs.jpg";
    const gitHubIcon = "img/icon_github-sign.svg";
    const linkedinIcon = "img/icon_linkedin-sign.svg";
    const googlePlusIcon = "img/icon_googleplus-sign.svg";
    const facebookIcon = "img/icon_facebook-sign.svg";

    const divStyle = {
      marginTop: "30px",
    };
    const imgStyle = {
      maxHeight: "150px",
    };
    const imgIconStyle = {
      maxHeight: "30px",
      margin: "10px",
    };

    return (
      <div class="text-center col-lg-12" style={divStyle}>
        <img src={googleProfilePic}
         class="img-responsive img-circle center-block"
         style={imgStyle}/>
        <h1>Gabriel Amaral Fuchs</h1>

        <a href="https://github.com/GAFuchs">
          <img src={gitHubIcon} style={imgIconStyle}/>
        </a>

        <a href="https://www.linkedin.com/in/gabriel-amaral-fuchs-b97a89122?trk=hp-identity-name">
          <img src={linkedinIcon} style={imgIconStyle}/>
        </a>

        <a href="https://plus.google.com/u/0/111515541985509247632">
          <img src={googlePlusIcon} style={imgIconStyle}/>
        </a>

        <a href="https://www.facebook.com/gabriel.fuchs.54?ref=br_rs">
          <img src={facebookIcon} style={imgIconStyle}/>
        </a>

        <h4>email: gafuchs@gmail.com</h4>

        <Footer />
      </div>
    );
  }
}
