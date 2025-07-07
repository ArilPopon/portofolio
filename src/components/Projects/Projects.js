import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LaporinAja from "../../Assets/Projects/leaf.png";
import contactManagement from "../../Assets/Projects/contactManagement.png";
import tokoMasErisonSiregar from "../../Assets/Projects/tokoMasErisonSiregar.png";
import sistemManajemenPerpustakaan from "../../Assets/Projects/perpustakaan.png";
import motoLelang from "../../Assets/Projects/motolelang.jpg";
import smkn1Warungasem from "../../Assets/Projects/smkn1warungasem.jpg";
import nurulIslamTengaran from "../../Assets/Projects/nurulislamtengaran.jpg";
import silviMedika from "../../Assets/Projects/silvimedika.jpg";
import axaPrinting from "../../Assets/Projects/axaprinting.jpg";
import rilla from "../../Assets/Projects/rilla.jpg";
import upods from "../../Assets/Projects/upods.jpg";
import bisnisProperty from "../../Assets/Projects/bisnisproperty.jpg";
import apnFilm from "../../Assets/Projects/apnfilm.jpg";
import poponCafe from "../../Assets/Projects/poponcafe.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="oren">Projek </strong>Saya
        </h1>
        <p style={{ color: "white" }}>
          Beberapa Projek Yang Pernah Saya Buat
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactManagement}
              isBlog={false}
              title="Contact Management"
              description="Sebuah Contact Management System Yang Dibuat Menggunakan ReactJS dengan Backend Dari Programmer Zaman Now"
              ghLink="https://github.com/ArilPopon/ContactManagementReact"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tokoMasErisonSiregar}
              isBlog={false}
              title="Toko Emas Erison Siregar"
              description="Sebuah Website Toko Emas Yang Saya Buat Untuk Memenuhi Tugas Mata Kuliah Pemrograman Web. Teknologi Yang Digunakan adalah PHP Native Dengan Bantuan Boostrap Untuk Styling Nya"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0dehttps://github.com/ArilPopon/FP_PEMWEB_KELOMPOK3"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sistemManajemenPerpustakaan}
              isBlog={false}
              title="Sistem Manajemen Perpustakaan"
              description="Sebuah Sistem Manajemen Perpustakaan Berbasis Website Yang Saya Buat Untuk Memenuhi Tugas Mata Kuliah Rekayasa Perangkat Lunak. Teknologi Yang Digunakan adalah Laravel dan Boostrap"
              ghLink="https://github.com/ArilPopon/RPL_Perpustakaan"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LaporinAja}
              isBlog={false}
              title="LaporinAja"
              description="Design UI/UX Aplikasi LaporinAja Yang Saya Buat Menggunakan Figma Untuk Memenuhi Tugas Mata Kuliah Desain Antar Muka"
              // ghLink="#"
              demoLink="https://www.figma.com/proto/cOYNzy59Zq6Lw5O996knHw/LaporinAja?page-id=27%3A2&node-id=27-3&viewport=-2734%2C-1574%2C0.81&t=OShY3lnN2sHUQrf5-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=27%3A3&show-proto-sidebar=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motoLelang}
              isBlog={false}
              title="Moto Lelang"
              description="Pelelangan Motor Online Berbasis Website Yang Saya Buat Sebagai Topik Tugas Akhir SMK. Website Tersebut Dibuat Menggunakan Laravel dan Boostrap"
              ghLink="https://github.com/donigna/motolelang-web"
              demoLink="https://www.youtube.com/watch?v=nlxkcD06dGw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smkn1Warungasem}
              isBlog={false}
              title="SMKN 1 Warungasem"
              description="Website Sekolah yang dibuat menggunakan Wordpress"
              // ghLink="#"
              demoLink="https://smkn1warungasem.sch.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nurulIslamTengaran}
              isBlog={false}
              title="Yayasan Nurul Islam Tengaran"
              description="Website Yayasan yang dibuat menggunakan Wordpress"
              demoLink="https://nurulislam-tengaran.sch.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={silviMedika}
              isBlog={false}
              title="Silvi Medika"
              description="Website Landing Page Yang Dibuat Menggunakan Wordpress"
            // ghLink="#"
            // demoLink="https://silvimedika.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={axaPrinting}
              isBlog={false}
              title="Axa Printing"
              description="Website Landing Page Yang Dibuat Menggunakan Wordpress"
            // ghLink="#"
            // demoLink="z#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rilla}
              isBlog={false}
              title="Rilla"
              description="Website Landing Page Yang Dibuat Menggunakan Wordpress"
            // ghLink="#"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={upods}
              isBlog={false}
              title="Upods"
              description="Website Landing Page Yang Dibuat Menggunakan Wordpress"
            // ghLink="#"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bisnisProperty}
              isBlog={false}
              title="Bisnis Property"
              description="Website Landing Page Yang Dibuat Menggunakan HTML, CSS, JavaScript, dan Boostrap"
              ghLink="https://github.com/ArilPopon/BisnisPropertyDesainWeb"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apnFilm}
              isBlog={false}
              title="APN Film"
              description="Website Yang Menampilkan List Film Yang Didapat Dari Movie DB Dengan Menggunakan Axios Yang Dibuat Menggunakan ReactJS"
              ghLink="https://github.com/ArilPopon/APN-Film"
            // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poponCafe}
              isBlog={false}
              title="Popon Cafe"
              description="Website Statis cafe ala ala yang dibuat menggunakan HTML, CSS, Boostrap, JavaScript"
              ghLink="https://github.com/ArilPopon/Popon-Cafe"
            // demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
