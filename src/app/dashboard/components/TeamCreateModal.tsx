"use client";

import ModalButton from "@/app/components/button/ModalButton";
import classes from "../dashboard.module.scss";
import Modal from "@/app/components/modal/Modal";
import { FC, useState, useRef } from "react";

interface TeamCreateModalProps {
	open: boolean;
	onClose: () => void;
}

interface TeamProps {
	name?: string;
	category?: string;
	image?: string;
	description?: string;
}

const TeamCreateModal: FC<TeamCreateModalProps> = ({ onClose, open }) => {
	const [team, setTeam] = useState<TeamProps | null>(null);
	const [variant, setVariant] = useState<"name" | "category" | "image" | "description">("name");
	const inpRef = useRef<HTMLInputElement | null>(null);

	const handleCreateTeam = () => {
		console.log("Team ", team);
		console.log(variant);

		// setTeam(null);
		// onClose();
		// setVariant("name");
	};

	const handleContinue = () => {
		inpRef.current && inpRef.current?.value;
		switch (variant) {
			case "name":
				return setVariant("category");
			case "category":
				return setVariant("description");
			case "description":
				return setVariant("image");
			default:
				return setVariant("name");
		}
	};

	const titleLabel = () => {
		switch (variant) {
			case "category":
				return "category";
			case "description":
				return "description";
			case "image":
				return "image";
			default:
				return "name";
		}
	};

	const handleCancel = () => {
		setTeam(null);
		onClose();
		setVariant("name");
	};

	const formInput = () => {
		if (variant === "name") {
			return (
				<input
					type="text"
					id="team-name"
					value={team?.name}
					onFocus={e => (e.target.value = "")}
					onChange={e =>
						setTeam({
							...team,
							name: e.target.value,
						})
					}
				/>
			);
		}

		if (variant === "category") {
			return (
				<input
					type="text"
					id="team-category"
					onFocus={e => (e.target.value = "")}
					value={team?.category}
					onChange={e =>
						setTeam({
							...team,
							category: e.target.value,
						})
					}
				/>
			);
		}

		if (variant === "description") {
			return (
				<textarea
					id="team-description"
					value={team?.description}
					onFocus={e => (e.target.value = "")}
					onChange={e =>
						setTeam({
							...team,
							description: e.target.value,
						})
					}
				/>
			);
		}

		if (variant === "image") {
			return (
				<input
					type="text"
					id="team-image"
					onFocus={e => (e.target.value = "")}
					value={team?.image}
					onChange={e =>
						setTeam({
							...team,
							image: e?.target?.value,
						})
					}
				/>
			);
		}
	};

	return (
		<Modal onClose={onClose} open={open}>
			<div className={classes.teamCreateModal}>
				<h4>{variant === "name" ? "Create a new team" : `Team ${titleLabel()}`}</h4>
				<div className={classes.teamCreateModal__input}>
					<label htmlFor={`team-${titleLabel}`}>Team {titleLabel()}</label>
					{formInput()}
				</div>
				<div className={classes.teamCreateModal__buttons}>
					<ModalButton
						value="Cancel"
						variant="outlined"
						type="button"
						onClick={handleCancel}
					/>
					{variant === "image" && (
						<span
							onClick={handleCreateTeam}
							className={classes.teamCreateModal__buttons__skip}
						>
							Skip for now
						</span>
					)}
					<ModalButton
						value="Continue"
						variant="primary"
						type="button"
						onClick={
							variant === "image"
								? handleCreateTeam
								: handleContinue
						}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default TeamCreateModal;
