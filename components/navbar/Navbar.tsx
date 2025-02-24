import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import DarkMode from "../darmode/DarkMode";
const Navbar = () => {
  return (
    <Nav className="text-white bg-primary shadow-primary">
      <NavbarBrand>
        <p className="font-bold text-inherit">ລາວໂທລະຄົມ XB Note</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <DarkMode />
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
};
export default Navbar;
