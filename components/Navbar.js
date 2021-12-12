import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

import Logo from "./Logo";

const mainMenus = [
    {
        title: "Platform",
        dropdown: [
            {
                icon: () => {
                    return (
                        <svg
                            width="26"
                            height="22"
                            viewBox="0 0 26 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13 0C19.479 0 24.8693 4.74222 26 11C24.8705 17.2578 19.479 22 13 22C6.52103 22 1.1307 17.2578 0 11C1.12949 4.74222 6.52103 0 13 0ZM13 19.5556C15.4506 19.555 17.8285 18.7083 19.7444 17.1541C21.6602 15.5999 23.0007 13.4301 23.5464 11C22.9987 8.57182 21.6574 6.40445 19.7417 4.85225C17.826 3.30006 15.4492 2.45487 13 2.45487C10.5508 2.45487 8.17404 3.30006 6.25833 4.85225C4.34262 6.40445 3.00129 8.57182 2.45365 11C2.99928 13.4301 4.33975 15.5999 6.25565 17.1541C8.17155 18.7083 10.5494 19.555 13 19.5556ZM13 16.5C11.5659 16.5 10.1906 15.9205 9.17657 14.8891C8.16253 13.8576 7.59285 12.4587 7.59285 11C7.59285 9.54131 8.16253 8.14236 9.17657 7.11091C10.1906 6.07946 11.5659 5.5 13 5.5C14.4341 5.5 15.8094 6.07946 16.8234 7.11091C17.8375 8.14236 18.4072 9.54131 18.4072 11C18.4072 12.4587 17.8375 13.8576 16.8234 14.8891C15.8094 15.9205 14.4341 16.5 13 16.5ZM13 14.0556C13.7967 14.0556 14.5608 13.7336 15.1241 13.1606C15.6875 12.5876 16.004 11.8104 16.004 11C16.004 10.1896 15.6875 9.41242 15.1241 8.8394C14.5608 8.26637 13.7967 7.94444 13 7.94444C12.2033 7.94444 11.4392 8.26637 10.8759 8.8394C10.3125 9.41242 9.99603 10.1896 9.99603 11C9.99603 11.8104 10.3125 12.5876 10.8759 13.1606C11.4392 13.7336 12.2033 14.0556 13 14.0556Z"
                                fill="#4D2DB8"
                            />
                        </svg>
                    );
                },
                header: "Platform Overview",
                description: "Manage customers revenue lifecycles",
                link: "/platform/",
            },
            {
                icon: () => {
                    return (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.88721 15.0276L6.96961 10.9452L10.3632 14.34L14.1516 10.5516L12 8.4H18V14.4L15.8484 12.2484L10.3632 17.7336L6.96961 14.34L3.99961 17.3088C5.3477 19.3378 7.41676 20.7785 9.78749 21.3388C12.1582 21.8991 14.6533 21.5372 16.7671 20.3264C18.881 19.1156 20.4555 17.1465 21.1715 14.8181C21.8876 12.4897 21.6917 9.97609 20.6235 7.78672C19.5553 5.59736 17.6948 3.89595 15.4189 3.02729C13.1429 2.15863 10.6219 2.18769 8.36663 3.10856C6.11134 4.02944 4.29049 5.77327 3.27305 7.98667C2.2556 10.2001 2.11768 12.7175 2.88721 15.0288V15.0276ZM1.04161 16.8972L1.02961 16.8852L1.03441 16.8804C0.350324 15.3444 -0.00214524 13.6814 9.82292e-06 12C9.82292e-06 5.3724 5.37241 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C7.11601 24 2.91601 21.084 1.04161 16.8972Z"
                                fill="#9839EB"
                            />
                        </svg>
                    );
                },
                header: "For RevOps",
                description: "Grow revenue instead of integrating it",
                link: "/teams/#revenue-operations",
            },
            {
                icon: () => {
                    return (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 24C5.3724 24 0 18.6276 0 12C0 6.6264 3.5316 2.0784 8.4 0.5496V3.0984C6.33711 3.93605 4.62936 5.46445 3.56887 7.42214C2.50838 9.37983 2.16106 11.6452 2.5863 13.8307C3.01155 16.0161 4.18295 17.986 5.90012 19.4032C7.61729 20.8204 9.77353 21.597 12 21.6C13.9125 21.5999 15.7815 21.0289 17.3674 19.9599C18.9533 18.8909 20.184 17.3728 20.9016 15.6H23.4504C21.9216 20.4684 17.3736 24 12 24ZM23.94 13.2H10.8V0.0599999C11.1948 0.0203999 11.5956 0 12 0C18.6276 0 24 5.3724 24 12C24 12.4044 23.9796 12.8052 23.94 13.2ZM13.2 2.4744V10.8H21.5256C21.2585 8.68513 20.2954 6.7192 18.7881 5.21188C17.2808 3.70456 15.3149 2.7415 13.2 2.4744Z"
                                fill="#67AAA2"
                            />
                        </svg>
                    );
                },
                header: "For Sales and CS",
                description: "Sales and CS-led monetization",
                link: "/teams/#sales-customer-success",
            },
            {
                icon: () => {
                    return (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24ZM12 21.6C14.5461 21.6 16.9879 20.5886 18.7882 18.7882C20.5886 16.9879 21.6 14.5461 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4C9.45392 2.4 7.01212 3.41143 5.21178 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 14.5461 3.41143 16.9879 5.21178 18.7882C7.01212 20.5886 9.45392 21.6 12 21.6V21.6ZM7.8 14.4H14.4C14.5591 14.4 14.7117 14.3368 14.8243 14.2243C14.9368 14.1117 15 13.9591 15 13.8C15 13.6409 14.9368 13.4883 14.8243 13.3757C14.7117 13.2632 14.5591 13.2 14.4 13.2H9.6C8.80435 13.2 8.04129 12.8839 7.47868 12.3213C6.91607 11.7587 6.6 10.9957 6.6 10.2C6.6 9.40435 6.91607 8.64129 7.47868 8.07868C8.04129 7.51607 8.80435 7.2 9.6 7.2H10.8V4.8H13.2V7.2H16.2V9.6H9.6C9.44087 9.6 9.28826 9.66321 9.17574 9.77574C9.06321 9.88826 9 10.0409 9 10.2C9 10.3591 9.06321 10.5117 9.17574 10.6243C9.28826 10.7368 9.44087 10.8 9.6 10.8H14.4C15.1957 10.8 15.9587 11.1161 16.5213 11.6787C17.0839 12.2413 17.4 13.0044 17.4 13.8C17.4 14.5956 17.0839 15.3587 16.5213 15.9213C15.9587 16.4839 15.1957 16.8 14.4 16.8H13.2V19.2H10.8V16.8H7.8V14.4Z"
                                fill="#FBAE8A"
                            />
                        </svg>
                    );
                },
                header: "For Finance",
                description: "Ensure accurate billing and collections data",
                link: "/teams/#finance",
            },
            {
                icon: () => {
                    return (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 10.8C13.5913 10.8 15.1174 11.4321 16.2426 12.5574C17.3679 13.6826 18 15.2087 18 16.8V24H15.6V16.8C15.6001 15.8817 15.2492 14.9982 14.6193 14.3301C13.9893 13.662 13.1279 13.2599 12.2112 13.206L12 13.2C11.0817 13.1999 10.1982 13.5508 9.53009 14.1807C8.86199 14.8107 8.45987 15.6721 8.406 16.5888L8.4 16.8V24H6V16.8C6 15.2087 6.63214 13.6826 7.75736 12.5574C8.88258 11.4321 10.4087 10.8 12 10.8ZM4.2 14.4C4.5348 14.4 4.86 14.4396 5.172 14.5128C4.96683 15.1236 4.84532 15.7594 4.8108 16.4028L4.8 16.8V16.9032C4.66206 16.8538 4.51859 16.8216 4.3728 16.8072L4.2 16.8C3.75254 16.8 3.32113 16.9667 2.9899 17.2675C2.65866 17.5684 2.45136 17.9818 2.4084 18.4272L2.4 18.6V24H0V18.6C0 17.4861 0.442499 16.4178 1.23015 15.6302C2.0178 14.8425 3.08609 14.4 4.2 14.4ZM19.8 14.4C20.9139 14.4 21.9822 14.8425 22.7698 15.6302C23.5575 16.4178 24 17.4861 24 18.6V24H21.6V18.6C21.6 18.1525 21.4333 17.7211 21.1325 17.3899C20.8316 17.0587 20.4182 16.8514 19.9728 16.8084L19.8 16.8C19.59 16.8 19.3884 16.836 19.2 16.902V16.8C19.2 16.0008 19.0704 15.2328 18.8292 14.5152C19.14 14.4396 19.4652 14.4 19.8 14.4ZM4.2 7.2C4.99565 7.2 5.75871 7.51607 6.32132 8.07868C6.88393 8.64129 7.2 9.40435 7.2 10.2C7.2 10.9957 6.88393 11.7587 6.32132 12.3213C5.75871 12.8839 4.99565 13.2 4.2 13.2C3.40435 13.2 2.64129 12.8839 2.07868 12.3213C1.51607 11.7587 1.2 10.9957 1.2 10.2C1.2 9.40435 1.51607 8.64129 2.07868 8.07868C2.64129 7.51607 3.40435 7.2 4.2 7.2ZM19.8 7.2C20.5956 7.2 21.3587 7.51607 21.9213 8.07868C22.4839 8.64129 22.8 9.40435 22.8 10.2C22.8 10.9957 22.4839 11.7587 21.9213 12.3213C21.3587 12.8839 20.5956 13.2 19.8 13.2C19.0044 13.2 18.2413 12.8839 17.6787 12.3213C17.1161 11.7587 16.8 10.9957 16.8 10.2C16.8 9.40435 17.1161 8.64129 17.6787 8.07868C18.2413 7.51607 19.0044 7.2 19.8 7.2ZM4.2 9.6C4.04087 9.6 3.88826 9.66321 3.77574 9.77574C3.66321 9.88826 3.6 10.0409 3.6 10.2C3.6 10.3591 3.66321 10.5117 3.77574 10.6243C3.88826 10.7368 4.04087 10.8 4.2 10.8C4.35913 10.8 4.51174 10.7368 4.62426 10.6243C4.73679 10.5117 4.8 10.3591 4.8 10.2C4.8 10.0409 4.73679 9.88826 4.62426 9.77574C4.51174 9.66321 4.35913 9.6 4.2 9.6ZM19.8 9.6C19.6409 9.6 19.4883 9.66321 19.3757 9.77574C19.2632 9.88826 19.2 10.0409 19.2 10.2C19.2 10.3591 19.2632 10.5117 19.3757 10.6243C19.4883 10.7368 19.6409 10.8 19.8 10.8C19.9591 10.8 20.1117 10.7368 20.2243 10.6243C20.3368 10.5117 20.4 10.3591 20.4 10.2C20.4 10.0409 20.3368 9.88826 20.2243 9.77574C20.1117 9.66321 19.9591 9.6 19.8 9.6ZM12 0C13.273 0 14.4939 0.505713 15.3941 1.40589C16.2943 2.30606 16.8 3.52696 16.8 4.8C16.8 6.07304 16.2943 7.29394 15.3941 8.19411C14.4939 9.09429 13.273 9.6 12 9.6C10.727 9.6 9.50606 9.09429 8.60589 8.19411C7.70571 7.29394 7.2 6.07304 7.2 4.8C7.2 3.52696 7.70571 2.30606 8.60589 1.40589C9.50606 0.505713 10.727 0 12 0ZM12 2.4C11.3635 2.4 10.753 2.65286 10.3029 3.10294C9.85286 3.55303 9.6 4.16348 9.6 4.8C9.6 5.43652 9.85286 6.04697 10.3029 6.49706C10.753 6.94714 11.3635 7.2 12 7.2C12.6365 7.2 13.247 6.94714 13.6971 6.49706C14.1471 6.04697 14.4 5.43652 14.4 4.8C14.4 4.16348 14.1471 3.55303 13.6971 3.10294C13.247 2.65286 12.6365 2.4 12 2.4Z"
                                fill="#6239EB"
                            />
                        </svg>
                    );
                },
                header: "For Customers",
                description: "Customer-led revenue growth",
                link: "/teams/#customers",
            },
        ],
    },
    {
        title: "Company",
        dropdown: [
            {
                icon: () => {
                    return (
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13 26C5.8201 26 0 20.1799 0 13C0 5.8201 5.8201 0 13 0C20.1799 0 26 5.8201 26 13C26 20.1799 20.1799 26 13 26ZM13 23.4C15.7583 23.4 18.4035 22.3043 20.3539 20.3539C22.3043 18.4035 23.4 15.7583 23.4 13C23.4 10.2417 22.3043 7.59647 20.3539 5.64609C18.4035 3.69571 15.7583 2.6 13 2.6C10.2417 2.6 7.59647 3.69571 5.64609 5.64609C3.69571 7.59647 2.6 10.2417 2.6 13C2.6 15.7583 3.69571 18.4035 5.64609 20.3539C7.59647 22.3043 10.2417 23.4 13 23.4ZM11.7 6.5H14.3V9.1H11.7V6.5ZM11.7 11.7H14.3V19.5H11.7V11.7Z"
                                fill="#B996F2"
                            />
                        </svg>
                    );
                },
                header: "About Nue",
                description: "Who we are",
                link: "/company/",
            },

            {
                icon: () => {
                    return (
                        <svg
                            width="23"
                            height="25"
                            viewBox="0 0 23 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.1053 15.7762V18.2643C11.0096 17.8833 9.83707 17.7665 8.68602 17.9236C7.53496 18.0806 6.43903 18.507 5.49026 19.1669C4.54149 19.8268 3.76757 20.701 3.23351 21.716C2.69945 22.731 2.42083 23.8572 2.42105 25L3.12868e-07 24.9988C-0.000375401 23.5451 0.337642 22.1106 0.988151 20.8052C1.63866 19.4999 2.5844 18.3583 3.75289 17.4679C4.92139 16.5775 6.28163 15.9621 7.7294 15.6686C9.17716 15.3752 10.674 15.4116 12.1053 15.775V15.7762ZM9.68421 14.2857C5.67132 14.2857 2.42105 11.0893 2.42105 7.14286C2.42105 3.19643 5.67132 0 9.68421 0C13.6971 0 16.9474 3.19643 16.9474 7.14286C16.9474 11.0893 13.6971 14.2857 9.68421 14.2857ZM9.68421 11.9048C12.3595 11.9048 14.5263 9.77381 14.5263 7.14286C14.5263 4.5119 12.3595 2.38095 9.68421 2.38095C7.00895 2.38095 4.84211 4.5119 4.84211 7.14286C4.84211 9.77381 7.00895 11.9048 9.68421 11.9048ZM16.9474 19.0476V15.4762H19.3684V19.0476H23V21.4286H19.3684V25H16.9474V21.4286H13.3158V19.0476H16.9474Z"
                                fill="#81D4CA"
                            />
                        </svg>
                    );
                },
                header: "Careers",
                description: "Come work with us",
                link: "/company/careers/",
            },
        ],
    },
];
export default function Navbar() {
    const [dropDownOpen, setdropDownOpen] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <nav className="absolute w-full top-0 left-0 right-0 bg-transparent z-50 md:px-6 py-5">
                <div className="container">
                    <div className="flex justify-center">
                        <div className="w-11/12 md:w-full">
                            <div className="flex items-center justify-between ">
                                <div className="flex justify-between items-center w-full">
                                    <Logo />
                                    <div className="w-full items-center justify-between hidden lg:flex">
                                        <div>
                                            <ul className="flex items-center ">
                                                {mainMenus.map((menu, i) => {
                                                    return (
                                                        <li
                                                            className=""
                                                            key={i}
                                                        >
                                                            <a
                                                                href={`#`}
                                                                className={`main-nav-item font-hntMedium select-none relative text-lg py-3 px-6 font-hntMedium`}
                                                                onMouseEnter={(
                                                                    e
                                                                ) =>
                                                                    setdropDownOpen(
                                                                        e.target.innerText.toLowerCase()
                                                                    )
                                                                }
                                                                onMouseLeave={() =>
                                                                    setdropDownOpen(
                                                                        ""
                                                                    )
                                                                }
                                                            >
                                                                {menu.title}
                                                                <AnimatePresence>
                                                                    {dropDownOpen ===
                                                                        menu.title.toLowerCase() && (
                                                                        <DropDown
                                                                            list={
                                                                                menu.dropdown
                                                                            }
                                                                        />
                                                                    )}
                                                                </AnimatePresence>
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                        <div className="flex items-center sm:-mx-3">
                                            <NavButton
                                                type="white"
                                                link="https://app.nue.io/login"
                                            >
                                                Sign in
                                            </NavButton>
                                            <NavButton
                                                type="primary"
                                                link="https://calendly.com/nue/nue-io-overview-conversation"
                                            >
                                                Book a demo
                                            </NavButton>
                                        </div>
                                    </div>

                                    <div className="lg:hidden">
                                        <a
                                            href="#"
                                            className="rounded-full h-12 w-12 flex items-center justify-center bg-grey-100 hover:bg-grey-200 transition-colors duration-200"
                                            onClick={() => {
                                                setMobileOpen(!mobileOpen);
                                            }}
                                        >
                                            <AnimatePresence>
                                                {!mobileOpen ? (
                                                    <HamburgerIcon />
                                                ) : (
                                                    <CloseIcon />
                                                )}
                                            </AnimatePresence>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {mobileOpen && <MobileMenu items={mainMenus} />}
            </AnimatePresence>
        </>
    );
}

const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                rotate: 0,
                opacity: 0,
            }}
            animate={{
                rotate: -180,
                opacity: 1,
            }}
            exit={{
                rotate: 0,
                opacity: 0,
            }}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="1.41421"
                y1="1"
                x2="16.9706"
                y2="16.5564"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="1"
                y1="-1"
                x2="23"
                y2="-1"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 17.9707 1)"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </motion.svg>
    );
};

const HamburgerIcon = () => {
    return (
        <motion.svg
            initial={{
                rotate: 0,
                opacity: 0,
            }}
            animate={{
                rotate: 180,
                opacity: 1,
            }}
            exit={{
                rotate: 0,
                opacity: 0,
            }}
            width="27"
            height="14"
            viewBox="0 0 27 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="1.94238"
                y1="7"
                x2="25.1521"
                y2="7"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="1.94238"
                y1="1"
                x2="25.1521"
                y2="1"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="1.94238"
                y1="13"
                x2="25.1521"
                y2="13"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </motion.svg>
    );
};

function Caret(props) {
    return (
        <div
            className={`transform transition-transform duration-200 origin-center cursor-pointer ${
                props.pos ? "rotate-180" : "rotate-0"
            }`}
        >
            <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.6572 1.95767L7.82865 7.6625C7.72028 7.76944 7.59135 7.85433 7.4493 7.91225C7.30725 7.97018 7.15488 8 7.00099 8C6.84711 8 6.69474 7.97018 6.55269 7.91225C6.41064 7.85433 6.28171 7.76944 6.17334 7.6625L0.344815 1.95767C0.235556 1.8516 0.148832 1.72541 0.0896501 1.58637C0.0304689 1.44733 8.96928e-07 1.2982 9.03512e-07 1.14758C9.10096e-07 0.996961 0.0304689 0.84783 0.0896501 0.708793C0.148832 0.569755 0.235556 0.443563 0.344815 0.337496C0.453183 0.230554 0.58211 0.145673 0.724162 0.087748C0.866215 0.0298226 1.01858 -5.67436e-07 1.17247 -5.60709e-07C1.32635 -5.53983e-07 1.47872 0.0298226 1.62077 0.087748C1.76282 0.145673 1.89175 0.230555 2.00012 0.337496L7.00099 5.24365L12.0019 0.337496C12.2214 0.122648 12.5191 0.00194765 12.8295 0.00194767C12.9832 0.00194767 13.1354 0.0315797 13.2774 0.0891533C13.4195 0.146727 13.5485 0.231114 13.6572 0.337496C13.8767 0.552344 14 0.843741 14 1.14758C14 1.29803 13.9697 1.447 13.9109 1.586C13.8521 1.72499 13.7659 1.85129 13.6572 1.95767Z"
                    fill="black"
                    fillOpacity="0.8"
                />
            </svg>
        </div>
    );
}

function MobileMenu(props) {
    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className={`w-full h-full inset-0 fixed bg-white z-40 py-32 lg:hidden`}
        >
            <div className="container">
                <div className="flex justify-center">
                    <div className="w-11/12 md:w-full ">
                        {props.items.map((menu, i) => {
                            return <MobileMenuSection key={i} menu={menu} />;
                        })}
                        <div className="flex items-center justify-between sm:-mx-3 mt-6 md:px-6">
                            <NavButton
                                type="primary"
                                link="https://calendly.com/nue/nue-io-overview-conversation"
                            >
                                Book a demo
                            </NavButton>
                            <NavButton
                                type="white"
                                link="https://app.nue.io/login"
                            >
                                Sign in
                            </NavButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function MobileMenuSection(props) {
    const [sectionOpen, setSectionOpen] = useState(false);
    return (
        <div className="">
            <div
                className="flex items-center justify-between w-full cursor-pointer select-none hover:bg-grey-50 p-6"
                onClick={() => {
                    setSectionOpen(!sectionOpen);
                }}
            >
                <div>
                    <p className="font-hntMedium text-lg">{props.menu.title}</p>
                </div>
                <div>
                    <Caret pos={sectionOpen} />
                </div>
            </div>
            {sectionOpen && (
                <div className="">
                    {props.menu.dropdown.map((item, j) => {
                        return <DropDownInner item={item} key={j} />;
                    })}
                </div>
            )}
        </div>
    );
}

function MenuItem({ children }) {
    return (
        <div>
            <p className="font-hntMedium text-lg">{props.menu.title}</p>
        </div>
    );
}

function NavButton(props) {
    return (
        <div className="px-2 sm:px-3">
            <Link href={props.link}>
                <a target="_blank" className={`btn btn-${props.type}`}>
                    {props.children}
                </a>
            </Link>
        </div>
    );
}

function DropDown(props) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 0.05,
                    },
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 0.1,
                    },
                }}
                className={`bg-white absolute top-12 -left-4 w-96 p-6 rounded-lg shadow-lg`}
            >
                <div className="absolute -top-3 left-12 w-12 h-12">
                    <svg
                        width="29"
                        height="14"
                        viewBox="0 0 29 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.96549 3.08661L0 13.511H28.4178L20.4515 3.08636C18.965 1.14115 16.6567 0 14.2086 0C11.7603 0 9.45197 1.14125 7.96549 3.08661Z"
                            fill="white"
                        />
                    </svg>
                </div>
                {props.list.map((item, i) => {
                    return <DropDownInner key={i} item={item} />;
                })}
            </motion.div>
        </>
    );
}

function DropDownInner(props) {
    return (
        <motion.div
            initial={{ y: -20 }}
            animate={{
                y: 0,
                transition: {
                    duration: 0.1,
                },
            }}
            exit={{
                y: -20,
                transition: {
                    duration: 0.1,
                },
            }}
            className="relative menu-item flex items-center px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-50 mb-2 last:mb-0"
        >
            <a
                href={props.item.link}
                className="absolute w-full h-full inset-0 z-10"
            ></a>
            <div className="w-12">
                <span>{props.item.icon()}</span>
            </div>
            <div className="w-full">
                <p className="font-hntMedium text-sm ">{props.item.header}</p>
                <p className="text-xs font-hntRegular text-grey-600">
                    {props.item.description}
                </p>
            </div>
        </motion.div>
    );
}
