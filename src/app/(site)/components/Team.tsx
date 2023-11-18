"use client";

import { Data } from "@/types";
import { FC } from "react";

interface TeamProps {
	team: Data;
}

const Team: FC<TeamProps> = ({ team }) => {
	return (
		<div>
			<h4>{team.teamName}</h4>
		</div>
	);
};

export default Team;
