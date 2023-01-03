import { Fragment } from "react";
import Header from "./sections/header/Header";
import Nav from "./sections/navbar/Nav"
import Characters from "./sections/characters/Characters";
import Footer from "./sections/footer/Footer";

function App() {

  return (
    <Fragment>
      <Nav />
      <Header />
      <Characters />
      <Footer />
    </Fragment>
  );
}

export default App;
