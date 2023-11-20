"use client";

import ModalButton from "@/app/components/button/ModalButton";
import classes from "../home.module.scss";
import Modal from "@/app/components/modal/Modal";
import { FC } from "react";

interface TeamCreateModalProps {
	open: boolean;
	onClose: () => void;
}

const TeamCreateModal: FC<TeamCreateModalProps> = ({ onClose, open }) => {
	return (
		<Modal onClose={onClose} open={open}>
			<div className={classes.teamCreateModal}>
				<h4>Create a new team</h4>
				<div className={classes.teamCreateModal__input}>
					<label htmlFor="team-name">Team name</label>
					<input type="text" id="team-name" />
				</div>
				<div className={classes.teamCreateModal__buttons}>
					<ModalButton value="Cancel" variant="outlined" />
					<ModalButton value="Create" variant="primary" />
				</div>
			</div>
		</Modal>
	);
};

export default TeamCreateModal;
