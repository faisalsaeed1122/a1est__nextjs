// import Image from "next/image";
// import styles from "@/app/ui/home.module.css";
// import clsx from "clsx";
// import Link from "next/link";
import Header from "../../components/header";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/footer";
import Container from "react-bootstrap/Container";
export default function Page() {
  return (
    <div>
      <Container>
        <Header />
        <h1 className="heading__lg">Contact Us</h1>
        <section className="contact__wrapper">
          <p className="mb-5">
            Get in touch with out team to learn more about A1Estimation
          </p>
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <div className="number">
                  <i className="bi bi-telephone"></i> +1 (404) 551-2288
                </div>
                <div className="email">
                  <i className="bi bi-envelope"></i> info@a1est.com
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
}
