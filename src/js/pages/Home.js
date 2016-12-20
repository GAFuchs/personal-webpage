import React from "react";
import Footer from "../components/Footer";

export default class Home extends React.Component {
  render() {
    const googleProfilePic = "img/PerfilGabrielFuchs.jpg";
    const divStyle = {
      marginTop: "30px",
    };
    const imgStyle = {
      maxHeight: "150px",
    };

    return (
      <div class="text-center col-lg-12" style={divStyle}>
        <img src={googleProfilePic}
         class="img-responsive img-circle center-block"
         style={imgStyle}/>
        <h1>Gabriel Amaral Fuchs</h1>
        <Footer />
      </div>
    );
  }
}
