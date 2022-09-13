import Header from "../components/Header";
import styles from "../styles/home.module.css";

const Home = (props) => {
  return (
    <div className={styles.home}>
      <div className={styles.backgroundImg}></div>
      <Header />
      <div className={styles.content + " container-center"}>
        <div className={styles.searchBar}>
          <input placeholder="Get Started..." />
        </div>
        <p className={styles.headline}>Initiate Learning with us!</p>
        <p className={styles.summary}>
          Our Platform provides you with all of your desired courses with up to
          dated knowledge and technical aspects in order to give a boost to your
          skill set to make you a leading individual in competitive environments
        </p>
      </div>
    </div>
  );
};

export default Home;
