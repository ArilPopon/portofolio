import { Col, Row } from "react-bootstrap";
import dicodingAws from "../../Assets/Certificates/dicoding_aws.webp"
import dicodingFrontEndWebPemula from "../../Assets/Certificates/dicoding_belajar_membuat_front-end-web-untuk-pemual.webp"
import dicodingDasarPemroramanJs from "../../Assets/Certificates/dicoding_dasar_pemrograman_javascript.webp"
import dicodingDasarPemroramanWeb from "../../Assets/Certificates/dicoding_dasar_pemrograman_web.webp"
import gdscGit from "../../Assets/Certificates/gdsc_git.webp"
import gdscParticipation from "../../Assets/Certificates/gdsc_participation.webp"
import gsc from "../../Assets/Certificates/gsc.webp"
import hitPahit from "../../Assets/Certificates/hitPahit.webp"
import bnsp from "../../Assets/Certificates/sertifikasi_bnsp_pengembang_web_pratama.webp"
import ujikom from "../../Assets/Certificates/sertifikat_ujikom.webp"
import pkl from "../../Assets/Certificates/sertifkat_pkl.webp"
import wordCertificate from "../../Assets/Certificates/word_jobstreet.webp"


function Certificate() {

    return (
        <Row style={{
            justifyContent: "center", paddingBottom: "50px", marginTop: "25px"
        }}>
            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1er6tjEZaBa_DEalNOqLaGmjzE2TSVE9-/view?usp=drive_link" target="_blank" rel="noreferrer">
                        <img src={dicodingDasarPemroramanWeb} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Dicoding Belajar Dasar Pemrograman Web</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/14BBbuh6p0kZpOGcLxp0_-tms6mB5nvm_/view?usp=drive_link" target="_blank" rel="noreferrer">
                        <img src={dicodingFrontEndWebPemula} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Dicoding Belajar Membuat Front-End Web Untuk Pemula</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1mwJG5T5rV0gGzF7ddgzZaT9DCsw7EPub/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={dicodingDasarPemroramanJs} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Dicoding Belajar Dasar Pemrograman Javascript</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1pQhDkjjtvM5gljNSNNhQwmZeEE_zsXBi/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={dicodingAws} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Dicoding Belajar Dasar AWS Cloud</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1b4iRF8iTx0bK9iWtC9hhxrvUKlNuXBX9/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={gdscGit} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Peserta GDSC UPNVJT Git Workshop</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1yDIqiIuQbZPWiuSaThSK7dQTAUGuAHzN/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={gdscParticipation} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Peserta GDSC UPNVJT Study Jam Front End Developer</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1KLFFY2qKsZMb1Y-jOfjYzruF7gTnfV6k/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={gsc} alt="img" className="img-fluid certificate-image" style={{}} />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Peserta GSC 2024</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1UwqpKmyWr5gBICzPRgvnNn6j3hB6p6nC/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={hitPahit} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Peserta Hackfest 2024</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1bWq_EMstLTnuLGkEAF3kbRYTCY4mavqm/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={bnsp} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Sertifikasi BNSP Pengembang Web Pratama</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1BEEDAUOdabFzXuMDJ3y4G7VRXhzAwmWN/view?usp=drive_link" target="_blank" rel="noreferrer">
                        <img src={ujikom} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Uji Kompetensi SMK</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1bTr1dOVaHTGmYJqA3fvt4-hhx4vJR8N9/view?usp=drive_link" target="_blank" rel="noreferrer">
                        <img src={pkl} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Sertifikat PKL</h6>
                </div>
            </Col>

            <Col xs={12} md={4} className="mb-4">
                <div className="card-certificate">
                    <a href="https://drive.google.com/file/d/1iBeb5MdZLU_93VBPpxHc_23a7d2hXpxk/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={wordCertificate} alt="img" className="img-fluid certificate-image" />
                    </a>
                    <h6 className="certificate-title mt-3 text-center">Job Street Microsoft Word</h6>
                </div>
            </Col>

        </Row >

    )
}

export default Certificate;