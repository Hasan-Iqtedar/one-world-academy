import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.css";
import logo from "../assets/logo";
import DropdownMenu from "./DropdownMenu";

const Header = (props) => {
  return (
    <div className={styles.header + " container-center"}>
      <div className={styles.logo}>
        <img src={logo} alt=""></img>
        <h1>One World Academy</h1>
      </div>

      <div className={styles.links + " container-center"}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        {/* <NavLink className={styles.link} to="/">Courses</NavLink> */}
        <DropdownMenu title="Courses">
          <div>Free Courses</div>
          <div>Paid Courses</div>
        </DropdownMenu>
        <NavLink className={styles.link} to="/">
          Teachers
        </NavLink>
        <NavLink className={styles.link} to="/">
          Blogs
        </NavLink>
        <NavLink className={styles.link} to="/">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
