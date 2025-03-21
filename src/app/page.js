'use client'

import Header from "./components/Header/Header";
import Heropage from "./components/Heropage/Heropage";
import Description from "./components/Main/Description/Description";
import Activities from "./components/Main/Activities/Activities";
import Content from "./components/Main/Content";
import "./page.scss"
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="Home">
      <Header/>
      <Heropage/>
      <Content>
        <Description/>
        <Activities/>
      </Content>
      <Footer/>
    </div>
  );
}
