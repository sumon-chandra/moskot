import classes from "./home.module.scss";
import Banner from "./components/Banner";
import Teams from "./components/Teams";

export default function Home() {
	return (
		<main className={classes.home}>
			<Banner />
			<Teams />
		</main>
	);
}
