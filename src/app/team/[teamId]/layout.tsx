import { FC, ReactNode } from "react";
import classes from "./team.module.scss";
import TeamBanner from "./components/TeamBanner";

interface TeamLayoutProps {
	children: ReactNode;
}

const TeamLayout: FC<TeamLayoutProps> = ({ children }) => {
	return (
		<section className={classes.layout}>
			<TeamBanner />
			{children}
		</section>
	);
};

export default TeamLayout;
