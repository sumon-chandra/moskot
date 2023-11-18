import { FaPlus } from "react-icons/fa";
import BannerButton from "../components/button/BannerButton";
import classes from "./home.module.scss";

export default function Home() {
	return (
		<main className={classes.home}>
			<section className={classes.home__banner}>
				<div className={classes.home__banner__description}>
					<h1>Team Creation management system</h1>
					<p>Existing Team</p>
				</div>
				<div className={classes.home__banner__button}>
					<BannerButton
						variant="outlined"
						value="Create a team"
						icon={FaPlus}
					/>
				</div>
			</section>
		</main>
	);
}
