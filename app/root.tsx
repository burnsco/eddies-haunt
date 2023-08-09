import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import Logo from "../app/assets/images/IronMaiden.png";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])
];

export const loader = async ({ request }: LoaderArgs) => {
  return json({ user: await getUser(request) });
};

function NavItem({
  to,
  children,
  subMenu
}: {
  to: string;
  children: React.ReactNode;
  subMenu?: boolean;
}) {
  return (
    <NavLink
      to={to}
      prefetch="intent"
      className={({ isActive }) =>
        `${
          isActive
            ? " text-gray-800 "
            : "hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-110"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

function NavItemSubMenuItem({
  to,
  children,
  subMenu
}: {
  to: string;
  children: React.ReactNode;
  subMenu?: boolean;
}) {
  return (
    <NavLink
      to={to}
      prefetch="intent"
      className={({ isActive }) =>
        `${
          isActive
            ? " text-yellow-500 "
            : "hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-100"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

const NavHeader = () => {
  return (
    <header>
      <nav
        className="sticky
          flex w-full top-0 z-10
          mx-auto  max-w-7xl items-center justify-between p-3 lg:px-4
          bg-gradient-to-r
         from-indigo-500 from-10%
         via-sky-500 via-30%
         to-emerald-500 to-90%"
      >
        <NavLink to="/">
          <div className="flex items-center p-2">
            <img height="250" width="250" src={Logo} alt="Site Logo" />
          </div>
        </NavLink>
        <div
          className="flex
            justify-end
            antialiased
            font-bold
            hover:subpixel-antialiased
            items-center w-full
            p-2
          text-slate-50
          leading-6
            h-full border-2
            gap-6"
        >
          <NavItem to="/">Home</NavItem>
          <NavItem to="lineup">Lineup</NavItem>
          <NavItem to="albums">Albums</NavItem>
          <NavItem to="tickets">Tickets</NavItem>
          <NavItem to="discuss">Discuss</NavItem>
        </div>
      </nav>
    </header>
  );
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <NavHeader />
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
