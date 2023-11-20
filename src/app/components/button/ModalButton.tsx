"use client";
import { FC } from "react";
import classes from "./button.module.scss";

interface ButtonProps {
	value: string;
	variant: "primary" | "outlined";
	onClick?: () => void;
}

const ModalButton: FC<ButtonProps> = ({ value, variant, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${classes.modalBtn} ${
				variant === "primary" 
				? classes.modalBtn__primary 
				: classes.modalBtn__outlined
			}`}
		>
			{value}
		</button>
	);
};

export default ModalButton;
