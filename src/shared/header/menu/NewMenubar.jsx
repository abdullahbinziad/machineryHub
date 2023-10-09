import React from "react";
import logo from "./../../../assets/Np.png";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useCategory from "../../../hooks/useCategory";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const [refetch, allcategory] = useCategory();

  const renderItems = allcategory.map(({ categoryName, categorySlug }, key) => (
   
      <li key={key} className="relative list-none group hover:bg-np  px-4">
        <Link
          to={`products/${categorySlug}`}
          className="block font-semibold font-oswald text-base px-4 py-2 text-gray-600 hover:text-white"
        >
          {categoryName}
        </Link>
        {/* <ul
        className={`w-64  absolute left-full top-0 mt-0 space-y-2 bg-white shadow-lg transition-transform duration-300 ease-in-out transform`}
      >
        {subCategories &&
          subCategories.map((subsubmenuItem,index) => (
            <SubSubMenu key={index} {...subsubmenuItem} />
          ))}
      </ul> */}
      </li>
   
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-xl font-semibold font-oswald uppercase">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Products
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden  py-2 max-w-screen-xl  lg:block">
          <ul className="grid grid-cols-1 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
       <Link to={'/'}
       
       className="font-xl font-semibold font-oswald uppercase"
     >
       <ListItem className="flex items-center gap-2 py-2 pr-4">
         Home
       </ListItem>
     </Link>

      <NavListMenu />

      <Link to={'/about-us'}
       
       className="font-xl font-semibold font-oswald uppercase"
     >
       <ListItem className="flex items-center gap-2 py-2 pr-4">
        About Us
       </ListItem>
     </Link>
      <Link to={'/contact-us'}
       
        className="font-xl font-semibold font-oswald uppercase"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contacts Us
        </ListItem>
      </Link>
    </List>
  );
}

export function NewMenubar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [refetch, allcategory] = useCategory();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto md:mx-16 max-w-screen-xl shadow-none px-4 py-0">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="w-16 p-2 md:p-0 ">
          <Link to={"/"}>
            {" "}
            <img className="w-full" src={logo} alt="" />{" "}
          </Link>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
