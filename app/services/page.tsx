import Image from "next/image";
// import clsx from "clsx";
import Link from "next/link";
import Header from "../../components/header";

import OurSpecialization from "../../components/OurSpecialization";
import Button from "../../components/button";
import Footer from "../../components/footer";
import GetStarted from "../../components/GetStarted";
// import SEO from "../../components/SEO";
import Container from "react-bootstrap/Container";
import servicesData from "../../public/assets/data/services.json"; // Import JSON
import styles from "../../public/assets/scss/pages/services.module.scss";
import Ratio from "react-bootstrap/Ratio";

export default function Page() {
  return (
    <div>
      <Container>
        <Header />

        <h1 className="heading__lg">Our Services</h1>

        <section className={styles.serviceCard__wrapper}>
          {servicesData.map((service) => (
            <div className={styles.service__card} key={service.id}>
              <Link href={`/services/${service.slug}`}>
                <div className={styles.serviceCard__text}>
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                  <Button variant="secondary">Read more</Button>
                </div>
                <figure className={styles.image__holder}>
                  <Ratio aspectRatio="16x9">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1000}
                      height={38}
                    />
                  </Ratio>
                </figure>
              </Link>
            </div>
          ))}
        </section>
      </Container>

      <section className="Specialize__Trades">
        <h2>we SPECIALIZE in all construction TRADES</h2>
        <OurSpecialization />
      </section>
      <GetStarted />
      <Footer />
    </div>
  );
}
