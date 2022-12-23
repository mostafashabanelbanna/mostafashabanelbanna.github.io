import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import agriprice from "../../assets/img/agriprice.png";
import weCare from "../../assets/img/wecare.png";
import idsc from "../../assets/img/idsc.png";
import aswan from "../../assets/img/aswan.png";
import library from "../../assets/img/library.png";
import tbv from "../../assets/img/tbv.png";
import popc from "../../assets/img/popc.PNG";
import kms from "../../assets/video/kms.mp4";
import trustline from "../../assets/img/trustline.png";

import "./projects.css";

const webApps = [
  {
    bg: "rgb(47 45 82 / 20%)",
    name: "TrustLine",
    url: "https://www.trustline.sa/",
    imgSrc: trustline,
    description:
      "TrustLine is a crowdsourced cyber security platform specialized in providing bug bounty, penteration testing and VDP products",
    tech: "the application frontend built with Next JS Framwork for SRR, Bootstrap, React Spring, etc",
  },
  {
    bg: "rgb(242 242 244 / 20%)",
    name: "WeCare",
    url: "http://empf2019-001-site8.htempurl.com",
    imgSrc: weCare,
    description:
      "WeCare is a service website that provides customer demands and satisfaction. those services are health, insurance, facility management, etc. ",
    // code: "https://github.com/mostafashabanelbanna/weCare",
    tech: "the application frontend built with React JS Library, Bootstrap, FullCalendar, etc",
  },
  {
    bg: "rgb(47 45 82 / 20%)",
    name: "KMS",
    url: "",
    imgSrc: null,
    videoSrc: kms,
    description:
      "Knowledge Management System is a web application helps facilitate searches for researchers in all sectors.",
    code: "https://github.com/mostafashabanelbanna/KMS",
    tech: "the application built with React JS Library for frontend, and ASP.NET Core for backend",
  },
  {
    bg: "rgb(242 242 244 / 20%)",
    name: "agriprice",
    url: "http://agriprice.gov.eg",
    imgSrc: agriprice,
    description:
      "Agriprice is a Web Site that Shows monitored local and international commodities prices .",
    code: "https://github.com/mostafashabanelbanna/AgriPrice",
    tech: "the application built with React JS Library for frontend, and ASP.NET Core for backend",
  },
  {
    bg: "#eaf1f9",
    name: "Poll Center",
    url: "http://popc.idsc.gov.eg/",
    imgSrc: popc,
    description:
      "Poll Center is a Website that Studys the attitudes of Egyptian public opinion towards the issues raised on the internal scene, and directing them to the decision maker.",
    code: "",
    tech: "the application built with ASP.NET MVC, using JavaScript, Jquery and ajax for frontend.",
  },
  {
    bg: "#85bd76",
    name: "idsc",
    url: "https://idsc.gov.eg/IDSC/Default.aspx",
    imgSrc: idsc,
    description:
      "IDSC Website is The official platform for the online portal of Information and Decision Support Center.",
    code: "",
    tech: "the application built with ASP.NET MVC, using JavaScript, Jquery and ajax for frontend.",
  },
  {
    bg: "#ffffff",
    name: "aswan",
    url: "https://aswan.gov.eg/",
    imgSrc: aswan,
    description:
      "Aswan Website is The official platform for the online Portal of Aswan governerate.",
    code: "https://github.com/mostafashabanelbanna/Aswan",
    tech: "the application built with React JS Library for frontend, and ASP.NET Core for backend",
  },
  {
    bg: "rgb(70 54 252 / 30%)",
    name: "idsc library",
    url: "http://www.library.idsc.gov.eg",
    imgSrc: library,
    description:
      "Accessing the Library remotely to make its collections, experts, and services more readily discoverable and available for users.",
    code: "",
    tech: "the application built with ASP.NET MVC, using JavaScript, Jquery and ajax for frontend.",
  },
  {
    bg: "rgb(70 54 252 / 50%)",
    name: "tbv",
    url: "https://jobs.tbv.cloud/aa/Teqneia",
    imgSrc: tbv,
    description:
      "Online recruitment application to make it easier to source candidates and conduct interviews as well as process the relevant paperwork required to hire and train candidates",
    code: "",
    tech: "the application built with React JS Library for frontend, and PHP Core for backend",
  },
];
const Projects = () => {
  return (
    <div className="projects">
      {webApps.map((item, index) => {
        return (
          <div
            style={{
              backgroundColor:
                index % 2 === 0 ? "#fff" : "rgba(59, 130, 246, .5)",
            }}
            className="projects_row"
          >
            <Container>
              <Row className="justify-content-center" key={index}>
                <Col lg={8}>
                  <div className="d-flex justify-content-between">
                    <h3 style={{ textTransform: "uppercase" }}>{item.name}</h3>
                    <div>
                      {item.url && (
                        <a
                          className="btn px-2 mx-1 btn-sm btn-outline-dark"
                          href={item.url ? item.url : "#"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Preview
                        </a>
                      )}
                      {item.code && (
                        <a
                          className="btn px-2 mx-1 btn-sm btn-outline-dark"
                          href={item.code ? item.code : "#"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Souce Code
                        </a>
                      )}
                    </div>
                  </div>

                  {item.imgSrc ? (
                    <img
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "8px",
                      }}
                      className="img-fluid my-3"
                      src={item.imgSrc}
                      alt={item.imgSrc}
                    />
                  ) : (
                    <video
                      preload="auto"
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        borderRadius: "8px",
                      }}
                      width="100%"
                      controls
                    >
                      <source src={item.videoSrc} type="video/mp4" />
                    </video>
                  )}
                  <p className="my-4">{item.description}</p>
                  <p className="my-4">{item.tech}</p>
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
