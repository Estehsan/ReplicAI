import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Button } from "../Button";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <ReactCompareSlider
                    className="w-full rounded-lg"
                    itemOne={
                      <ReactCompareSliderImage
                        src="/before.jpg"
                        height={400}
                        width={400}
                        alt="Generated photo of a room with MightyHomes.com"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src="/after.jpg"
                        height={400}
                        width={400}
                        alt="Generated photo of a room with MightyHomes.com"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
              Transform {` `}
              <span className="relative whitespace-nowrap text-emerald-500">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-emerald-300/70"
                  preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Your Home</span>
              </span>{" "}
              with AI-Powered Design in Just 30 Seconds
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-slate-500">
              Get ready to revamp your living space effortlessly with our AI
              design tool. No credit card required, just upload a photo and pick
              a mode!
            </p>
            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
              <Button href="/dream">Get 5 Credits free</Button>

              {/* <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <Button
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  variant="outline">
                  <svg
                    aria-hidden="true"
                    className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current">
                    <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
                  </svg>
                  <span className="ml-3">Watch video</span>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
