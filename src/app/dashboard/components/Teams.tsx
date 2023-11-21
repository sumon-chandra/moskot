"use client";
import classes from "../home.module.scss";
import { useGetTeamsQuery } from "@/app/redux/features/api/teamApi";
import Team from "./Team";

const Teams = () => {
	const { data, isFetching } = useGetTeamsQuery();

	return (
		<section className={classes.home__teamSection}>
			<div className={classes.home__teamSection__teams}>
				{data?.data.map(team => (
					<Team key={team._id} team={team} />
				))}
			</div>
		</section>
	);
};

export default Teams;
