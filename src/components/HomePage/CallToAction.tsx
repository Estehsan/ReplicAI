import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/../images/background-call-to-action.jpg";

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-emerald-600 py-32">
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Ready for a home makeover?{" "}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Try our AI-powered design tool! Just upload a photo of your room and
            pick a design mode - modern, traditional, eclectic - in 30 seconds.
            No credit card needed. Effortlessly transform your living space with
            our easy and fun-to-use tool! {/* bullet points */}
          </p>
          <Button href="/dashboard" color="white" className="mt-10">
            Get 5 Credits free
          </Button>
        </div>
      </Container>
    </section>
  );
}
