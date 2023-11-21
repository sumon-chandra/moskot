import WelcomeScreen from "./components/WelcomeScreen";
import classes from "./team.module.scss";

const SingleTeam = () => {
	return (
		<section className={classes.team}>
			<WelcomeScreen />
		</section>
	);
};

export default SingleTeam;
