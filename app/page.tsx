import styles from "../public/assets/scss/pages/home.module.scss";

// import clsx from "clsx";
import Link from "next/link";
import Header from "../components/header";
import Button from "../components/button";
import HeroSwiper from "../components/HeroSwiper";
import TestimonialSwiper from "../components/TestimonialSwiper";
import OurSpecialization from "../components/OurSpecialization";
import WelcomeText from "../components/WelcomeText";
import Footer from "../components/footer";
import GetStarted from "../components/GetStarted";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <div>
      <div className="Hero__Wrapper">
        <Container>
          <Header />
          <HeroSwiper />
        </Container>
      </div>

      <section className="welcome__wrap">
        <Container>
          <p>
            A1 Estimation provides Construction Cost Estimating , Quantity
            Takeoffs and Cost Analysis & Management services for Owners, General
            Contractors, Sub Contractors, Architects, Home Builders, Engineers,
            Developers, Designers, Material Suppliers, Cost Segregation firms
            and Real estate industry.
          </p>
          <WelcomeText />
          <div className="d-flex justify-content-center">
            <Link href="/about">
              <Button variant="primary">More About Us</Button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="Specialize__Trades">
        <h2>we SPECIALIZE in all construction TRADES</h2>
        <OurSpecialization />
      </section>

      <section className="Testimonials">
        <Container>
          <h2 className="heading__with__line">What Our Client Says</h2>
          <TestimonialSwiper />
        </Container>
      </section>

      <div className={styles.shape} />
      <GetStarted />
      <Footer />
    </div>
  );
}
