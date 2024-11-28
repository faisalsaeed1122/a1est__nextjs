"use client";
// import Image from "next/image";
// // import clsx from "clsx";
// // import Link from "next/link";
import styles from "../../public/assets/scss/pages/about.module.scss";
import Header from "../../components/header";
import WelcomeText from "../../components/WelcomeText";
import Footer from "../../components/footer";
import GetStarted from "../../components/GetStarted";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Container from "react-bootstrap/Container";

export default function Page() {
  const [startCounter, setStartCounter] = useState(false);

  // Trigger the counter on page load
  useEffect(() => {
    setStartCounter(true);
  }, []);

  return (
    <div>
      <Container>
        <Header />

        <section className={styles.about}>
          <p>
            With over a decade of experience in the construction industry, we
            are well equipped to handle all projects. We are known for
            excellence in our performance, credibility in our methods and
            creativity in our project management. We build projects in the most
            efficient, reliable and cost effective way. Our certified
            professionals use latest software, databases and equipment to
            provide the most accurate services with fastest turnaround time at
            fees that are extremely competitive.
          </p>

          <WelcomeText />
          <p>
            We work closely with our clients to define our role on each project.
            By combining our clients objectives with our consultants expertise
            we enable our clients to win more bids for the projects and increase
            their profits, saves time and cost, as they will not have to hire a
            full time estimator.
          </p>
          <p>
            A1 Estimation Inc. portfolio consists of union/non-union
            residential, commercial, civil and industrial construction projects.
            Our commitment to deliver superior service is demonstrated by our
            long-term relationship with our institutional, architectural,
            engineering, public, private, and construction clients.
          </p>
        </section>

        <section className={styles.stats__wrap}>
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.heading}>
                <h2>A1 Estimation</h2>
                <span>in Numbers</span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className={styles.stats__counter}>
                <div>
                  {startCounter && (
                    <h3>
                      <CountUp start={0} end={10} duration={2.5} />
                    </h3>
                  )}
                  <p>Years of Working</p>
                </div>
                <div>
                  {startCounter && (
                    <h3>
                      <CountUp start={0} end={2345} duration={2.5} />
                    </h3>
                  )}
                  <p>Projects Done</p>
                </div>
                <div>
                  {startCounter && (
                    <h3>
                      <CountUp start={0} end={157} duration={2.5} />
                    </h3>
                  )}
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <GetStarted />
      <Footer />
    </div>
  );
}
