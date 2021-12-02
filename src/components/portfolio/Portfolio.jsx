import { useEffect, useState } from "react";
import classnames from 'classnames';
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className={classnames('home')}>
        <div className="resume grid" id="exp">
          <div className="resume-experience">
            <h3 className="resume-heading">Experience</h3>
            <div className="resume-item">
              <h5 className="resume-title">H&R Block</h5>
              <h6 className="resume-caption">
                <div className="resume-role">Associate Software Engineer<div className="dot"></div></div>
                <div className="resume-timestamp">2021 - Current</div>
              </h6>
            </div>
            <div className="resume-item">
              <h5 className="resume-title">Cerner Corporation</h5>
              <h6 className="resume-caption">
                <div className="resume-role">Interface Engineer<div className="dot"></div></div>
                <div className="resume-timestamp">2020 - 2021</div>
              </h6>
            </div>
            <div className="resume-item">
              <h5 className="resume-title">MidwayUSA</h5>
              <h6 className="resume-caption">
                <div className="resume-role">Application Developer Intern<div className="dot"></div></div>
                <div className="resume-timestamp">2019 - 2020</div>
              </h6>
            </div>
          </div>
          <div className="resume-featured">
            <h3 className="resume-heading">Education</h3>
            <div className="resume-item">
              <h5 className="resume-title">Columbia College</h5>
              <h6 className="resume-caption">
                <div className="resume-role">B.S Computer Science with a Minor in Mathematics<div className="dot"></div></div>
                <div className="resume-timestamp">August 2016 - May 2020</div>
              </h6>
            </div>
          </div>
        </div>
        </div>
          /*
    <div className="portfolio" id="portfolio">
      <h1> Experience & Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>*/
  );
}
