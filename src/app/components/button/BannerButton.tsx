import { FC } from "react";
import { IconType } from "react-icons";
import classes from "./button.module.scss";

interface ButtonProps {
	variant: "primary" | "outlined";
	value: string;
	icon?: IconType;
	onClick?: () => void;
}

const BannerButton: FC<ButtonProps> = ({ value, variant, icon: Icon, onClick }) => {
	return (
		<button
			className={`${classes.bannerButton} ${
				variant === "primary"
					? classes.bannerButtonPrimary
					: classes.bannerButtonOutlined
			}`}
			onClick={onClick}
		>
			{Icon && (
				<span className={classes.bannerButton__icon}>
					<Icon />
				</span>
			)}
			<span>{value}</span>
		</button>
	);
};

export default BannerButton;
