import { FC } from "react";
import { IconType } from "react-icons";
import classes from "./button.module.scss";

interface ButtonProps {
	variant: "primary" | "outlined";
	value: string;
	icon?: IconType;
}

const BannerButton: FC<ButtonProps> = ({ value, variant, icon: Icon }) => {
	return (
		<button
			className={`${classes.bannerButton} ${
				variant === "primary"
					? classes.bannerButtonPrimary
					: classes.bannerButtonOutlined
			}`}
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
