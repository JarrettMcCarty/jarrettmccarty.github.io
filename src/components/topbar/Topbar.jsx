import "./topbar.scss";
import { Person } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img width="50" height="50" src="assets/JM_logo_1.png" alt=""></img>
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <a href="resume/JarrettMcCarty_resume.pdf" target="_blank"><span>Resume</span></a>
          </div>
          <div className="itemContainer">
          <a className="icon" href="https://www.github.com/JarrettMcCarty" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.github.com/JarrettMcCarty" target="_blank"><span>Github</span></a>
          </div>
          <div className="itemContainer">
          <a className="icon" href="https://www.linkedin.com/in/jarrettmccarty/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.linkedin.com/in/jarrettmccarty/" target="_blank"><span>LinkedIn</span></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
