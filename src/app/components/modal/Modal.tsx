"use client";

import { IoCloseSharp } from "react-icons/io5";
import classes from "./modal.module.scss";
import { FC, ReactNode } from "react";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
	if (!open) return null;
	return (
		<div className={classes.modal}>
			<div onClick={onClose} className={classes.modal__overlay} />
			<div className={classes.modal__container}>
				<div className={classes.modal__container__content}>
					<div
						onClick={onClose}
						className={classes.modal__container__content__closeBtn}
					>
						<IoCloseSharp size={15} />
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
