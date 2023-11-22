"use client";
import classes from "../dashboard.module.scss";
import { TeamData } from "@/types";
import Image from "next/image";
import { FC } from "react";

interface TeamProps {
	team: TeamData;
}

const Team: FC<TeamProps> = ({ team }) => {
	return (
		<div className={classes.dashboard__teamSection__teams__team}>
			<Image
				src="/teamDemo.png"
				width={86}
				height={86}
				alt="Team image"
				className={classes.dashboard__teamSection__teams__team__image}
			/>
			<h4 className={classes.dashboard__teamSection__teams__team__title}>{team.name}</h4>
			<h5 className={classes.dashboard__teamSection__teams__team__category}>{team.category}</h5>
			<p className={classes.dashboard__teamSection__teams__team__description}>
				Grow Your Team with Ease: Effortlessly Add Members for Increased Performance and
				Achievement
			</p>
		</div>
	);
};

export default Team;
