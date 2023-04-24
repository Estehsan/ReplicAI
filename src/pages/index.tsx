import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { Hero } from "@/components/HomePage/Hero";
import { PricingSection } from "@/components/HomePage/PricingSection";
import { Testimonials } from "@/components/HomePage/Testimonials";
import Footer from "@/components/Footer";
import HeroTwo from "@/components/HomePage/HeroTwo";
import { CallToAction } from "@/components/HomePage/CallToAction";
import { Modes } from "@/components/HomePage/Modes";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Might Homes</title>
      </Head>

      <Header />

      <main>
        {/* <Hero /> */}
        <HeroTwo />
        <Testimonials />
        {/* <PricingSection /> */}
        <CallToAction />
        <Modes />

        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Room</h3>
                <Image
                  alt="Original photo of a room with MightyHomes.com"
                  src="/1.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with MightyHomes.com"
                  width={400}
                  height={400}
                  src="/1-new.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
