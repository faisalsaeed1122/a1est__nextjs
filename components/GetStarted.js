import Link from "next/link";
import Button from "./button";

export default function GetStarted() {
  return (
    <div className="container">
      <div className="get__started">
        <p>
          The ultimate source to get your construction bids ready within 48
          hours.
        </p>
        <Link href="/contact">
          <Button variant="secondary">Contact us</Button>
        </Link>
      </div>
    </div>
  );
}
