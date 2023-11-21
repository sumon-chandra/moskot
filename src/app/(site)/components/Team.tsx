"use client";
import classes from "../home.module.scss";
import { TeamData } from "@/types";
import Image from "next/image";
import { FC } from "react";

interface TeamProps {
	team: TeamData;
}

const Team: FC<TeamProps> = ({ team }) => {
	return (
		<div className={classes.home__teamSection__teams__team}>
			<Image
				src="/teamDemo.png"
				width={86}
				height={86}
				alt="Team image"
				className={classes.home__teamSection__teams__team__image}
			/>
			<h4 className={classes.home__teamSection__teams__team__title}>{team.name}</h4>
			<h5 className={classes.home__teamSection__teams__team__category}>{team.category}</h5>
			<p className={classes.home__teamSection__teams__team__description}>
				Grow Your Team with Ease: Effortlessly Add Members for Increased Performance and
				Achievement
			</p>
		</div>
	);
};

export default Team;
