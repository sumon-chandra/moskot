"use client";

import BannerButton from "@/app/components/button/BannerButton";
import classes from "../dashboard.module.scss";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import TeamCreateModal from "./TeamCreateModal";

const Banner = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<section className={classes.dashboard__banner}>
				<div className={classes.dashboard__banner__description}>
					<h4>Team Creation management system</h4>
					<p>Existing Team</p>
				</div>
				<div className={classes.dashboard__banner__button}>
					<BannerButton
						variant="outlined"
						value="Create a team"
						onClick={() => setOpenModal(true)}
						icon={FaPlus}
					/>
				</div>
			</section>
			<TeamCreateModal open={openModal} onClose={() => setOpenModal(false)} />
		</>
	);
};

export default Banner;
