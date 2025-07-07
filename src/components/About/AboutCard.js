import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Kenalin saya <span className="oren">Aril Ponco Nugroho </span>
            yang sekarang tinggal di <span className="oren"> Surabaya</span>.
            <br />
            Saya Mahasiswa tahun kedua jurusan informatika yang memiliki minat kuat dalam pengembangan website. <br />
            Diluar dunia percodingan saya menyukai beberapa hal yaitu : <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Bermain PS
            </li>
            <li className="about-activity">
              <ImPointRight /> Cari Cuan Dari Airdrop (sekalian ngulik Web3)
            </li>
          </ul>

          <p style={{ color: "#CC5E33" }}>
            "Kerja Keras Sampai Yang Mahal Terlihat Murah"{" "}
          </p>
          <footer className="blockquote-footer">Popon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
