import Banner from "./components/Banner";
import InvitedList from "./components/Invitation/InvitedList";
import Teams from "./components/Teams";
import classes from "./dashboard.module.scss";

export default function Dashboard() {
	return (
		<main className={classes.dashboard}>
			<Banner />
			<Teams />
			{/* <InvitedList /> */}
		</main>
	);
}
