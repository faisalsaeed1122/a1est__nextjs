import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Header from "../../../components/header";
import OurSpecialization from "../../../components/OurSpecialization";
import Footer from "../../../components/footer";
import GetStarted from "../../../components/GetStarted";
import servicesData from "../../../public/assets/data/services.json";
import { notFound } from "next/navigation";

type Service = {
  slug: string;
  title: string;
  image: string;
  details: string;
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
        <section className="serviceDetail__wrapper">
          <div className="mainHeading__wrap">
            <figure className="image__holder">
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
            <div className="text">
              <Link href="/services">
                <button type="button" aria-label="Go back to services">
                  <i className="bi bi-arrow-left-short"></i>
                </button>
              </Link>
              <h1>{service.title}</h1>
            </div>
          </div>
          <p>{service.details}</p>
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
