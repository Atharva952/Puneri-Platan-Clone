import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {  Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.gif";

const navigation = [
  { name: "Players", href: "/players" },
  { name: "Platan World", href: "/paltan-world" },
  {name:'Tickets' , href:'https://www.district.in/events/pkl-2025-chennai-team' ,}
];

function Header() {
  return (
    <Disclosure
      as="nav"
      className="
        -skew-x-12 
        bg-linear-to-b from-black/50 to-transparent
        backdrop-brightness-90
        sticky top-0 z-50 w-full overflow-visible 

        before:content-[''] before:block before:absolute
        before:top-0 before:right-[10%] before:w-[30%]
        before:h-0.5 before:bg-white/20 before:rounded-md
        before:animate-softGlowFade

        after:content-[''] after:block after:absolute
        after:bottom-0 after:left-[30%] after:w-[40%]
        after:h-0.5 after:bg-white/20 after:rounded-md
        after:animate-softGlowFade
      "
    >
      {({ open }) => (
        <>
          <div className="mx-auto skew-x-12 max-w-[85%] py-0 md:py-3 sm:max-w-[95%]">
            <div className="relative flex h-10 sm:h-14 md:h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 sm:left-0 flex items-center md:hidden z-10">
                <DisclosureButton className="relative inline-flex items-center justify-center text-gray-300 hover:text-white focus:outline-none p-2">
                  <span className="sr-only">Open main menu</span>

                  {!open ? (
                    <div className="flex flex-col gap-2">
                      <span className="w-7 border border-white"></span>
                      <span className="w-5 border border-white"></span>
                      <span className="w-3 border border-white"></span>
                    </div>
                  ) : (
                    <XMarkIcon className="w-7 h-7 text-orange-500" />
                  )}
                </DisclosureButton>
              </div>

              <div className="relative flex w-full items-center">
                <Link to={'/'}>
                <div className="flex lg:flex-1 items-center">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-12 sm:h-28 md:h-32 w-auto"
                  />
                </div>
                </Link>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-orange-400"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden absolute top-full left-0 w-full skew-x-12 bg-black/80 backdrop-blur-md">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
    
  );
  
}

export default Header;