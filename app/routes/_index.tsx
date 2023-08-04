import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import Logo from "../assets/images/IronMaiden.png";

export const meta: V2_MetaFunction = () => [{ title: "Eddies Haunt" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main>
      <header>
        <nav className="sticky flex flew-row w-full top-0 z-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <div className="flex items-center p-2">
            <img height="150" width="150" src={Logo} alt="Site Logo" />
          </div>
          <div className="flex antialiased font-medium hover:subpixel-antialiased items-center w-full justify-end p-2 h-full border-2 gap-6">
            <Link to="Albums">Home</Link>
            <Link to="Albums">Lineup</Link>
            <Link to="Albums">Tickets</Link>
            <Link to="Albums">Albums</Link>
            <Link to="Albums">Discuss</Link>
            <Link to="Albums">Concerts</Link>
          </div>
        </nav>
      </header>
      {/* leaving the the old stuff here just to have something nice to look at while building */}
      <div className="relative min-h-screen bg-black sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://lastfm.freetls.fastly.net/i/u/ar0/39277c12fe2c2f24a5f005aa16263d96.jpg"
                  alt="Old Iron Maiden lineup"
                />
                <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
              </div>
              <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
                <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                  <span className="block uppercase text-yellow-500 drop-shadow-md">
                    Iron Maiden
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                  Fan site where you can find the latest concert information,
                  photos and discussions about the best metal band of all time!
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  {user ? (
                    <Link
                      to="/notes"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                    >
                      View Notes for {user.email}
                    </Link>
                  ) : (
                    <div className="space-y-4 shadow-md sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link
                        to="/join"
                        className="shadow-lg shadow-indigo-500/40 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 hover:bg-yellow-50 sm:px-8"
                      >
                        Sign up
                      </Link>
                      <Link
                        to="/login"
                        className="flex items-center justify-center rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50"
                      >
                        Log In
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
