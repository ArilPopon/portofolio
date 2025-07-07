import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/fotoaril2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Yuk <span className="oren"> Kenal </span> Saya Secara Singkat
            </h1>
            <p className="home-about-body">
              Mahasiswa Informatika Tahun Kedua Yang Menyukai Dunia Pengembangan Website dan Juga Suka Jalan-Jalan.
              <br />
              <br />Saya Memiliki Pengalaman dalam menggunakan
              <i>
                <b className="oren"> HTML, CSS, JavaScript, PHP, Frameworks Seperti ReactJS dan Laravel dan CMS Wordpress serta Figma Untuk UI/UX Design</b>
              </i>
              <br />
              <br />
              Saya Tertarik Dalam Bidang &nbsp;
              <i>
                <b className="oren">Pengembangan Website </b>
              </i>
              <br />
              <br />
              Saya Suka Mencari
              <i>
                <b className="oren">
                  {" "}
                  Pengalaman Yang Baru
                </b>
              </i>
              &nbsp; Untuk
              <i>
                <b className="oren"> Pengembangan Diri</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Temukan Saya Di</h1>
            <p>
              Yuk <span className="oren">Kunjungi Sosmed </span>Saya
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ArilPopon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arilponconugroho/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/poncoxs__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
