import Link from "next/link";
import { useRouter } from "next/router";

// -> ICONS
import { RxDashboard } from "react-icons/rx";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineTaskAlt } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const NavbarBot = () => {
    const router = useRouter();

    return (
        <nav className="fd-nav__menu">
            <ul>
                <li className={router.pathname == "/" ? "active" : ""}>
                    <Link href="/">
                        <div className="fd-nav__icon all">
                            <AiOutlineDashboard />
                        </div>
                        Dashboard
                    </Link>
                </li>
                <li className={router.pathname == "/progetti" ? "active" : ""}>
                    <Link href="/progetti">
                        <div className="fd-nav__icon fill">
                            <RxDashboard />
                        </div>
                        Progetti
                    </Link>
                </li>
                <li className={router.pathname == "/my-task" ? "active" : ""}>
                    <Link href="/my-task">
                        <div className="fd-nav__icon fill2">
                            <MdOutlineTaskAlt />
                        </div>
                        My Task
                    </Link>
                </li>
                <li className={router.pathname == "/calendar" ? "active" : ""}>
                    <Link href="/calendar">
                        <div className="fd-nav__icon fill">
                            <AiOutlineCalendar />
                        </div>
                        Calendar
                    </Link>
                </li>
                <li className={router.pathname == "/settings" ? "active" : ""}>
                    <Link href="/settings">
                        <div className="fd-nav__icon stroke">
                            <FiSettings />
                        </div>
                        Settings
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarBot;
