import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import agriprice from "./assets/img/agriprice.png";
import idsc from "./assets/img/idsc.png";
import aswan from "./assets/img/aswan.png";
import library from "./assets/img/library.png";
import tbv from "./assets/img/tbv.png";
import popc from "./assets/img/popc.PNG";
import kms from "./assets/img/kms.PNG";

const webApps = [
  {
    name: "kms",
    url: "",
    imgSrc: kms,
    description:
      "knowledge management system, Helps facilitate searches for researchers in all sectors",
  },
  {
    name: "popc",
    url: "http://popc.idsc.gov.eg/",
    imgSrc: popc,
    description:
      "Studying the attitudes of Egyptian public opinion towards the issues raised on the internal scene, and directing them to the decision maker",
  },
  {
    name: "agriprice",
    url: "http://agriprice.gov.eg",
    imgSrc: agriprice,
    description:
      "Show monitored local and international commodities prices application built with React js and ASP.Net Core.",
  },
  {
    name: "idsc",
    url: "https://idsc.gov.eg/IDSC/Default.aspx",
    imgSrc: idsc,
    description:
      "The official platform for the online portal of IDSC built with web forms.",
  },
  {
    name: "aswan",
    url: "https://aswan.gov.eg/",
    imgSrc: aswan,
    description:
      "The official platform for the online portal of Aswan governerate built with React js and ASP.Net Core.",
  },
  {
    name: "library",
    url: "http://www.library.idsc.gov.eg",
    imgSrc: library,
    description:
      "Accessing the Library remotely to make its collections, experts, and services more readily discoverable and available for users, application built with ASP.Net Core.",
  },
  {
    name: "tbv",
    url: "https://jobs.tbv.cloud/aa/Teqneia",
    imgSrc: tbv,
    description: "Online recruitment application built with React and php.",
  },
];
const Projects = () => {
  return (
    <Container>
      {webApps.map((item, index) => {
        return (
          <Row className="my-4">
            <Col lg={8}>
              <a href={item.url} target="_blank">
                <h3>{item.name}</h3>
              </a>
              <img
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  borderRadius: "8px",
                }}
                className="img-fluid my-3"
                src={item.imgSrc}
              />
              <p className="my-4">{item.description}</p>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default Projects;
