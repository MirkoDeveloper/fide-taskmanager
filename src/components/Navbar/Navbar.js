import Image from "next/image";
import logo from "../../assets/images/fides-logo.png";

import NavbarContent from "./NavbarContent";

const Navbar = () => {
    return (
        <>
            <div className="fd-nav fd-shadow">
                <div className="fd-nav__logo">
                    <Image src={logo} alt="Fides Logo" />
                </div>
                <NavbarContent />
            </div>
        </>
    );
};

export default Navbar;
