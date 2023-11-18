"use client";

import BannerButton from "@/app/components/button/BannerButton";
import classes from "../home.module.scss";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
	const handleCreateTeam = () => {
		console.log("hello world");
	};
	return (
		<section className={classes.home__banner}>
			<div className={classes.home__banner__description}>
				<h4>Team Creation management system</h4>
				<p>Existing Team</p>
			</div>
			<div className={classes.home__banner__button}>
				<BannerButton
					variant="outlined"
					value="Create a team"
					onClick={handleCreateTeam}
					icon={FaPlus}
				/>
			</div>
		</section>
	);
};

export default Banner;