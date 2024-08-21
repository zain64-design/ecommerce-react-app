import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    Input,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
    ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Logo from '../assets/images/logo.png';


const nestedMenuItems = [
    {
        title: "Shirts",
    },
    {
        title: "Pants",
    },
    {
        title: "Trousers",
    },
    {
        title: "Shoes",
    },
];


function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openNestedMenu, setopenNestedMenu] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const renderItems = nestedMenuItems.map(({ title }, key) => (
        <a href="#" key={key}>
            <MenuItem className='font-Satoshi_Reg'>{title}</MenuItem>
        </a>
    ));

    return (
        <>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex imp-bg-transparent items-center gap-2 p-0 font-Satoshi_Reg"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Shop
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden rounded-xl lg:block font-Satoshi_Reg">
                    <Menu
                        placement="right-start"
                        allowHover
                        offset={15}
                        open={openNestedMenu}
                        handler={setopenNestedMenu}
                    >
                        <MenuHandler className="flex items-center justify-between">
                            <MenuItem>
                                All
                                <ChevronUpIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${isMenuOpen ? "rotate-90" : ""
                                        }`}
                                />
                            </MenuItem>
                        </MenuHandler>
                        <MenuList className="rounded-xl">{renderItems}</MenuList>
                    </Menu>
                    <MenuItem className='capitalize'>new arrivals</MenuItem>
                    <MenuItem className='capitalize'>brands</MenuItem>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>
                    <Menu
                        placement="bottom"
                        allowHover
                        offset={6}
                        open={openNestedMenu}
                        handler={setopenNestedMenu}
                    >
                        <MenuHandler className="flex items-center justify-between font-Satoshi_Reg">
                            <MenuItem>
                                All
                                <ChevronUpIcon
                                    strokeWidth={2.5}
                                    className={`h-3.5 w-3.5 transition-transform ${isMenuOpen ? "rotate-90" : ""
                                        }`}
                                />
                            </MenuItem>
                        </MenuHandler>
                        <MenuList className="block rounded-xl lg:hidden">
                            {renderItems}
                        </MenuList>
                    </Menu>
                    <MenuItem className='font-Satoshi_Reg'>React</MenuItem>
                    <MenuItem className='font-Satoshi_Reg'>TailwindCSS</MenuItem>
                </Collapse>
            </div>
        </>
    );
}

function NavList() {
    return (
        <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
            <NavLink className="font-Satoshi_Reg inline-block leading-none" to='/'>Home</NavLink>
            <NavLink className="font-Satoshi_Reg inline-block leading-none" to='Shop'>About</NavLink>
            <NavListMenu />
            <NavLink className="font-Satoshi_Reg inline-block leading-none" to='Shop'>Contact</NavLink>
        </List>
    );
}

function Search() {
    return (
        <div className="relative flex w-full items-center gap-2 md:w-max">
            <Input
            type="search"
            label="Type here..."
            className="pr-20 text-black"
            containerProps={{
              className: "min-w-[577px]",
            }}
          />
            <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
    );
}

const Header = () => {

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 90 && setOpenNav(false));
    }, []);

    return (
        <>
            <header>
                <Navbar className="container-xl mx-auto shadow-none px-4 py-2">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Typography
                            as="a"
                            href="#"
                            variant="h6"
                            className="mr-2 cursor-pointer py-1.5 lg:ml-2"
                        >
                            <img src={Logo} className='object-contain object-center h-[22px]' />
                        </Typography>
                        <div className="hidden lg:block">
                            <div className="flex items-center justify-center">
                            <NavList />
                            <Search/>
                            </div>
                        </div>
                        <div className="hidden gap-2 lg:flex">
                            <NavLink className="text-black text-2xl"><BsCart3 /></NavLink>
                            <NavLink className="text-black text-2xl"><BsPerson /></NavLink>
                        </div>
                        <IconButton
                            variant="text"
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
                        <Search/>
                        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                            <Button size="sm" fullWidth className='font-Satoshi_Reg'>
                                Get Started
                            </Button>
                            <Button variant="outlined" className='font-Satoshi_Reg' size="sm" fullWidth>
                                Log In
                            </Button>
                        </div>
                    </Collapse>
                </Navbar>
            </header>
        </>
    )
}

export default Header