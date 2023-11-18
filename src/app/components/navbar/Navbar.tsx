"use client";

import { useCallback, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaUser, FaBell } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import styles from "./navbar.module.scss";
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});

	const handleMenuToggle = () => {
		setIsMenuOpen(previousState => !previousState);
	};

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (size.width > 768) {
			setIsMenuOpen(false);
		}
	}, [size.width]);

	return (
		<header className={styles.navbar}>
			<nav className={styles.navbar__container}>
				<div className={styles.navbar__container__menu}>
					{!isMenuOpen ? (
						<BiMenu
							onClick={handleMenuToggle}
							size={24}
							className={styles.navbar__menu__icon}
						/>
					) : null}
				</div>
				<div
					className={`${styles.navbar__container__content} ${
						isMenuOpen ? styles.isMenuOpen : ""
					}`}
				>
					{isMenuOpen && (
						<IoCloseSharp
							onClick={handleMenuToggle}
							size={24}
							className={
								styles.navbar__container__content__crossIcon
							}
						/>
					)}
					<div className={styles.navbar__container__content__logo}>
						<Image
							src="./logo.svg"
							width={115}
							height={41}
							alt="Logo"
							className={styles.navbar__content__logo__image}
						/>
					</div>
					<div className={styles.navbar__container__content__nav}>
						<ul>
							<li>
								<Link href="#">Availability</Link>
							</li>
							<li>
								<Link href="#">Integration</Link>
							</li>
							<li>
								<Link href="#">Community</Link>
							</li>
							<li>
								<motion.div
									className={
										styles.navbar__container__content__nav__bell
									}
								>
									<span>3</span>
									<LuBell />
								</motion.div>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.navbar__container__profile}>
					<Image src="/profile.png" width={37} height={37} alt="User Profile" />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
