"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaUser, FaBell } from "react-icons/fa";
import styles from "./navbar.module.scss";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<motion.nav className={styles.navbar}>
			<motion.div>Moskot</motion.div>
		</motion.nav>
	);
};

export default Navbar;
