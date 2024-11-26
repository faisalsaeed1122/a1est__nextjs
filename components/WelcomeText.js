// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
import Image from "next/image";

export default function WelcomeText() {
  return (
    <figure className="welcome__figure">
      <Image
        className="dark:invert"
        src="/assets/images/quantity-takeoff.jpg"
        alt="Next.js logo"
        width={1000}
        height={38}
        priority
      />

      <div className="figure__caption">
        <p>
          {" "}
          A1 Estimation Inc. can play a valuable role in bringing your vision to
          reality.
        </p>
        <ul className="figure__list">
          <li className="figure__list-item">
            We offer volume discount and free quote on our services
          </li>
          <li className="figure__list-item">We are quick and accurate </li>
          <li className="figure__list-item">
            We provide monthly or yearly contracts as well{" "}
          </li>
          <li className="figure__list-item">
            We also provide highlighted plans with estimate so you can review
            work accuracy
          </li>
        </ul>
      </div>
    </figure>
  );
}
