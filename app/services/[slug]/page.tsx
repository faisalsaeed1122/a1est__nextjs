import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Header from "../../../components/header";
import OurSpecialization from "../../../components/OurSpecialization";
import Footer from "../../../components/footer";
import GetStarted from "../../../components/GetStarted";
import servicesData from "../../../public/assets/data/services.json";
import { notFound } from "next/navigation";
import styles from "../../../public/assets/scss/pages/services.module.scss";
import Details from "../../../components/details";

type Service = {
  slug: string;
  title: string;
  image: string;
  details: string;
  listItems?: string[];
};

type ServiceDetailProps = {
  params: {
    slug: string;
  };
};

// Fetch all slugs for static generation
export async function generateStaticParams() {
  return servicesData.map((service: Service) => ({
    slug: service.slug,
  }));
}

// Dynamic page component
export default function ServiceDetail({ params }: ServiceDetailProps) {
  const service = servicesData.find((s: Service) => s.slug === params.slug);

  if (!service) {
    return notFound();
  }

  return (
    <div>
      <Container>
        <Header />
        <section className={styles.serviceDetail__wrapper}>
          <div className={styles.mainHeading__wrap}>
            <figure className={styles.image__holder}>
              <Image
                src={
                  service.image.startsWith("/")
                    ? service.image
                    : `/${service.image}`
                }
                alt={service.title}
                width={1000}
                height={600}
                priority
              />
            </figure>

            <div className={styles.text}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/services">Services</Link>
                </li>
                <li className="breadcrumb-item active">{service.title}</li>
              </ol>
              <h1>{service.title}</h1>
            </div>
          </div>
          <p>
            {" "}
            <Details content={service.details} />
          </p>

          {/* <ul>
            {service.listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
        </section>
      </Container>
      <section className="Specialize__Trades">
        <h2>We specialize in all construction trades</h2>
        <OurSpecialization />
      </section>
      <GetStarted />
      <Footer />
    </div>
  );
}
