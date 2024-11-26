"use client";

import styles from "../../public/assets/scss/faqs.module.scss";
import Header from "../../components/header";
import OurSpecialization from "../../components/OurSpecialization";
import Footer from "../../components/footer";
import Accordion from "react-bootstrap/Accordion";
import GetStarted from "../../components/GetStarted";
import Container from "react-bootstrap/Container";

export default function Page() {
  return (
    <div>
      <Container>
        <Header />
        <h2 className="heading__lg">FAQS</h2>
        <section className={styles.faqs}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Why should i choose A1 Estimation Inc?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  A1 Estimation Inc have a reputation for accuracy and quick
                  completion times. Our estimators are field experienced with a
                  diverse background in residential, commercial, civil and
                  industrial construction estimating, who will ensure your
                  project is handled efficiently and professionally. We have
                  offices nationwide, giving us excellent insight and
                  information in services available.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How can you guarantee your accuracy?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  Our figures are based on many years of experience of all types
                  of projects together with knowledge of daily trends in the
                  industry. we will calculate your whole job through certified
                  tools which makes us confident enough to claim money back
                  guarantee on our services.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header> What are your charges?</Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  Our service charges depend upon the Scope of work and size of
                  the project so after review the plan we will send you proposal
                  including our services charges and turned on time. Normally we
                  will charge $15-$20 per hour.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How do you work?</Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  Our team uses software such as Bluebeam, PlanSwift, AutoCAD &
                  Microsoft Excel, and is able to meet unique client
                  requirements as necessary. Procedure begins with the soft form
                  of drawings or blue prints of the project that we import in
                  the software and figure out the calculations division wise.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                {" "}
                What is the timeframe for an estimate?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  This will depend on the size and complexity of the project,
                  usually its about 24 to 36 hours. Once we have received all
                  the documents needed you will be appointed your own estimator
                  who will handle the project for you and ensure your estimate
                  is returned to you within the time frame you discuss.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                {" "}
                Can i send you multiple projects?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  Yes you can send multiple projects becasue we have team of
                  twenty five plus estimater on floor and we can do maximum
                  projects for your time limits. We offer volume discounts and
                  free quotes for all of our services. you can avail great
                  saving plans (up to 70% off) when you need several projects
                  estimated. You may want to come on board as a valued client
                  which will save your company money!
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                {" "}
                What is the medium of payment?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  We usually take payments through: 1 PayPal &quot;it secure our
                  clients&quot; 2 Bank OTC or Wire (Bank of America 3) All debit
                  & credit cards Whichever is easy for you.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                {" "}
                What is the guarantee to confidentiality of my belongings?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  We are in business for years, and we have a list of permanent
                  customers who trust us and are still in business with our
                  company. For your satisfaction, we will sign an NDA
                  (Non-Disclosure Agreement) with you which will work as a legal
                  document that we will be liable to keep your information
                  confidential.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                {" "}
                How to check A1 Estimation services accuracy?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  We provide highlighted marked plans, so you can check accuracy
                  of our estimates.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
