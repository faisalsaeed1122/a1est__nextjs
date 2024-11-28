// import Image from "next/image";
// import styles from "@/app/ui/home.module.css";
// import clsx from "clsx";
// import Link from "next/link";
import Header from "../../components/header";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/footer";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Page() {
  return (
    <div>
      <Container>
        <Header />
        <h1 className="heading__lg">Contact Us</h1>
        <section className="contact__wrapper">
          <Row>
            <Col lg={6}>
              <div className="Form__Wrapper">
                <h2>Get in touch</h2>
                <p className="mb-3">
                  Get in touch with our team to learn more about A1Estimation
                </p>
                <ContactForm />
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }}>
              <div className="contact__info">
                <div className="contactInfo__item">
                  <i className="bi bi-pin-map"></i>
                  <div className="">
                    <span>Location:</span>
                    <h2>907 Six OAKS CIR Apt. # B Norcross GA 30093</h2>
                  </div>
                </div>
                <div className="contactInfo__item">
                  <i className="bi bi-envelope-open"></i>
                  <div className="">
                    <span>Email:</span>
                    <h2> info@a1est.com</h2>
                  </div>
                </div>
                <div className="contactInfo__item">
                  <i className="bi bi-telephone"></i>
                  <div>
                    <span>Phone:</span>
                    <h2>+1 (404) 551-2288</h2>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </div>
  );
}
