import { BellIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { createElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  navListItems,
  navListMenuItems,
  profileMenuItems,
} from "../constants/constants";

// profile menu component

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu
      allowHover
      open={isMenuOpen}
      handler={setIsMenuOpen}
      placement="bottom-end"
    >
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="lg"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

function NavListAlerBell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <MenuItem className="hidden pl-4 lg:flex lg:rounded-full w-20">
            <Badge overlap="circular" placement="bottom-end">
              <BellIcon
                strokeWidth={2}
                color="gray"
                className={`h-7 w-7 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Badge>
          </MenuItem>
        </MenuHandler>

        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
}

function NavList() {
  const navigate = useNavigate();

  return (
    <ul className="mt-2  mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, path }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className=" text-blue-gray-500"
        >
          <MenuItem
            onClick={() => navigate(path)}
            className="flex items-center gap-2 lg:rounded-full"
          >
            {createElement(icon, { className: "h-[30px] w-[30px]" })}
            <span className="text-gray-900 font-medium "> {label}</span>
          </MenuItem>
        </Typography>
      ))}

      <NavListAlerBell />
    </ul>
  );
}

export function StudentNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  // const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex  items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block  ">
          <NavList />
        </div>

        <ProfileMenu />
      </div>

      {/* <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav> */}
    </Navbar>
  );
}
