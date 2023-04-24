import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Button } from "./Button";
import { Container } from "./../components/Container";
import { NavLink } from "./../components/NavLink";
import { Logo } from "./Logo";
import { useRouter } from "next/router";

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round">
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation({ email }: { email?: string }) {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation">
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
            {email ? (
              <>
                <MobileNavLink href="./dashboard">Dashboard</MobileNavLink>
                <MobileNavLink href="./buy-credits">Buy Credits</MobileNavLink>
                <Button
                  className="w-full text-left


                hover:text-blue-400
                ">
                  Sign out
                </Button>

                {/* <MobileNavLink href="./#pricing">Pricing</MobileNavLink> */}

                <hr className="m-2 border-slate-300/40" />
              </>
            ) : (
              <div />
            )}
            <MobileNavLink href="./#testimonials">Features</MobileNavLink>
            <MobileNavLink href="./#testimonials">Testimonials</MobileNavLink>
            {/* <MobileNavLink href="#pricing">Pricing</MobileNavLink> */}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export default function Header({
  photo,
  email,
}: {
  photo?: string;
  email?: string;
}) {
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-1 sticky top-0 bg-white z-50 
    ${scroll ? "shadow-md" : " "}
    `}>
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-16 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="./#testimonials">Testimonials</NavLink>
              {/* <NavLink href="./#pricing">Pricing</NavLink> */}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {photo ? (
              <Link
                href="/"
                onClick={() => signOut()}
                className="flex items-center space-x-2 hover:text-blue-400 transition">
                <Image
                  alt="Profile picture"
                  src={photo}
                  className="w-10 rounded-full"
                  width={32}
                  height={28}
                />
              </Link>
            ) : (
              <div className="w-10 h-10 rounded-full bg-white" />
            )}
            {email ? (
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="ma-2 hidden lg:block v-chip theme--light v-size--default ourSecondary indigo--text">
                  Dashboard
                </Link>
                <Link
                  href="/buy-credits"
                  className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition">
                  <div>Buy Credits</div>
                  <div className="text-blue-500 bg-blue-200 rounded-full px-2 text-xs flex justify-center items-center font-bold">
                    New
                  </div>
                </Link>
                <Button
                  // onClick={() => signOut()}
                  className="w-full text-left">
                  Sign out
                </Button>
              </div>
            ) : // get current route
            // if current route is /dream then show sign up button else show sign in button

            router.pathname === "/dream" ? (
              <Link
                className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-emerald-600 text-white px-5 py-2 text-sm shadow-md hover:bg-emerald-400 bg-emerald-600 font-medium transition"
                href="#"
                // onClick={() => signIn("google")}
              >
                <p>Sign Up </p>
              </Link>
            ) : (
              <Link
                className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-emerald-600 text-white px-5 py-2 text-sm shadow-md hover:bg-emerald-400 bg-emerald-600 font-medium transition"
                href="/Dashboard">
                <p>Sign Up </p>
              </Link>
            )}
            <div className="-mr-1 md:hidden">
              <MobileNavigation email={email} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

// export default function Header({
//   photo,
//   email,
// }: {
//   photo?: string;
//   email?: string;
// }) {
//   return (
//     <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
//       <Link href="/dream" className="flex space-x-2">
//         <Image
//           alt="header text"
//           src="/bed.svg"
//           className="sm:w-10 sm:h-10 w-9 h-9"
//           width={24}
//           height={24}
//         />
//         <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
//           roomGPT.io
//         </h1>
//       </Link>
//       {email ? (
//         <div className="flex items-center space-x-4">
//           <Link
//             href="/dashboard"
//             className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition">
//             <div>Dashboard</div>
//           </Link>
//           <Link
//             href="/buy-credits"
//             className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition">
//             <div>Buy Credits</div>
//             <div className="text-blue-500 bg-blue-200 rounded-full px-2 text-xs flex justify-center items-center font-bold">
//               New
//             </div>
//           </Link>
//           {photo ? (
//             <Link
//               href="/"
//               onClick={() => signOut()}
//               className="flex items-center space-x-2 hover:text-blue-400 transition">
//               <Image
//                 alt="Profile picture"
//                 src={photo}
//                 className="w-10 rounded-full"
//                 width={32}
//                 height={28}
//               />
//             </Link>
//           ) : (
//             <div className="w-10 h-10 rounded-full bg-white" />
//           )}
//         </div>
//       ) : (
//         <Link
//           className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-400 bg-blue-600 font-medium transition"
//           href="/dream">
//           <p>Sign Up </p>
//         </Link>
//       )}
//     </header>
//   );
// }
