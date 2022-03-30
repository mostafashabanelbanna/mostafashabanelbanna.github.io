import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import agriprice from "./assets/img/agriprice.png";
import idsc from "./assets/img/idsc.png";
import aswan from "./assets/img/aswan.png";
import library from "./assets/img/library.png";
import tbv from "./assets/img/tbv.png";
import popc from "./assets/img/popc.PNG";
// import kms from "./assets/img/kms.PNG";

import kms from "./assets/video/kms.mp4";

const webApps = [
  {
    name: "KMS",
    url: "",
    imgSrc: null,
    videoSrc: kms,
    description:
      "Knowledge Management System is a web application helps facilitate searches for researchers in all sectors.",
    tech: "the application built with React JS Library for frontend, and ASP.NET Core for backend",
  },
  {
    name: "agriprice",
    url: "http://agriprice.gov.eg",
    imgSrc: agriprice,
    description:
      "Agriprice is a Web Site that Shows monitored local and international commodities prices .",
    tech: "the application built with React JS Library for frontend, and ASP.NET Core for backend",
  },
  {
    name: "Poll Center",
    url: "http://popc.idsc.gov.eg/",
    imgSrc: popc,
    description:
      "Poll Center is a Website that Studys the attitudes of Egyptian public opinion towards the issues raised on the internal scene, and directing them to the decision maker.",
    tech: "the application built with ASP.NET MVC, using JavaScript, Jquery and ajax for frontend.",
  },
  {
    name: "idsc",
    url: "https://idsc.gov.eg/IDSC/Default.aspx",
    imgSrc: idsc,
    description:
      "IDSC Website is The official platform for the online portal of Information and Decision Support Center.",
    tech: "the application built with ASP.NET MVC, using JavaScript, Jquery and ajax for frontend.",
  },
  {
    name: "aswan",
    url: "https://aswan.gov.eg/",
    imgSrc: aswan,
    description:
      "Aswan Website is The official platform for the online Portal of Aswan governerate.",
    tech: "the application built with React JS Library for frontend, and ASP.NET Core for backend",
  },
  {
    name: "idsc library",
    url: "http://www.library.idsc.gov.eg",
    imgSrc: library,
    description:
      "Accessing the Library remotely to make its collections, experts, and services more readily discoverable and available for users.",
    tech: "the application built with ASP.NET MVC, using JavaScript, Jquery and ajax for frontend.",
  },
  {
    name: "tbv",
    url: "https://jobs.tbv.cloud/aa/Teqneia",
    imgSrc: tbv,
    description:
      "Online recruitment application to make it easier to source candidates and conduct interviews as well as process the relevant paperwork required to hire and train candidates",
    tech: "the application built with React JS Library for frontend, and PHP Core for backend",
  },
];
const Projects = () => {
  return (
    <Container>
      test
      {webApps.map((item, index) => {
        return (
          <Row className="my-4" key={index}>
            <Col lg={8}>
              <a
                href={item.url ? item.url : "#"}
                target="_blank"
                rel="noreferrer"
              >
                <h3 style={{ textTransform: "uppercase" }}>{item.name}</h3>
              </a>
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
        );
      })}
    </Container>
  );
};

export default Projects;
