import React from "react";
import {
  FaGithub,
  FaYoutube,
  FaCircleNotch,
  Fa,
  FaFileVideo,
  FaSearchDollar,
  FaBook,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "Achievements",
    subHeading: "My Experience",
    text:
      "Here........",
  });
  const [state] = React.useState([
    { 
      
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Github Projects",
      text:
        "I have some basic experience to complete this project.Inside our repository i had done almost 3,4 projects.",
    },
    {
      id: 2 ,
      icon: <FaYoutube className="commonIcons" />,
      heading: "Youtube Videos",
      text:
        "This is My Youtube Channel i making some Game Content in it...",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
      },
    {
      id: 4,
      icon: <FaBook className="commonIcons" />,
      heading: "Web Development Training",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
