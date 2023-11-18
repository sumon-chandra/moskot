import classes from "./home.module.scss";
import Banner from "./components/Banner";

export default function Home() {
	return (
		<main className={classes.home}>
			<Banner />
		</main>
	);
}
