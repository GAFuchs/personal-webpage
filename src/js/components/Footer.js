import React from "react";

export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "60px",
      marginLeft: "10px",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <p>Gabriel Amaral Fuchs personal webpage</p>
        </div>
      </footer>
    );
  }
}
