"use client";
import BannerButton from "@/app/components/button/BannerButton";
import classes from "../team.module.scss";
import { useParams } from "next/navigation";
import { useGetTeamQuery } from "@/app/redux/features/api/teamApi";

const TeamBanner = () => {
	const params = useParams();

	const { data } = useGetTeamQuery(`${params?.teamId}`);

	const handleAddPeoples = () => {};

	const handleAssignGroups = () => {};

	return (
		<section className={classes.banner}>
			<div className={classes.banner__status}>
				<h4 className={classes.banner__status__title}>Team ({data?.data.name})</h4>
				<div className={classes.banner__status__buttons}>
					<button>Active members (07)</button>
					<button>Pending members (02)</button>
				</div>
			</div>
			<div className={classes.banner__actionButtons}>
				<BannerButton
					variant="outlined"
					value="Assign a group"
					onClick={handleAssignGroups}
				/>
				<BannerButton
					variant="primary"
					value="Add members"
					onClick={handleAddPeoples}
				/>
			</div>
		</section>
	);
};

export default TeamBanner;
