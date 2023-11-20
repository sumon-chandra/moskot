import classes from "./home.module.scss";
import Banner from "./components/Banner";
import Teams from "./components/Teams";
import Modal from "../components/modal/Modal";

export default function Home() {
	return (
		<main className={classes.home}>
			<Banner />
			<Teams />
			<Modal />
		</main>
	);
}
