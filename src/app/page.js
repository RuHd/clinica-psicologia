
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Heropage from "./components/Heropage/Heropage";
import Description from "./components/Main/Description/Description";
import Activities from "./components/Main/Activities/Activities";
import Content from "./components/Main/Content";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Heropage/>
      <Content>
        <Description/>
        <Activities/>
      </Content>
    </div>
  );
}
