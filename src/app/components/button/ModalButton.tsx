"use client";
import { FC } from "react";
import classes from "./button.module.scss";

interface ButtonProps {
	value: string;
	variant: "primary" | "outlined";
	onClick?: () => void | undefined;
	type: "button" | "submit" | "reset" | undefined;
}

const ModalButton: FC<ButtonProps> = ({ value, variant, onClick, type }) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={`${classes.modalBtn} ${
				variant === "primary" ? classes.modalBtn__primary : classes.modalBtn__outlined
			}`}
		>
			{value}
		</button>
	);
};

export default ModalButton;
