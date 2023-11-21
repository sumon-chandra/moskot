import Image from "next/image";
import classes from "../team.module.scss";

const WelcomeScreen = () => {
	return (
		<div className={classes.welcome}>
			<div className={classes.welcome__head}>
				<h4>Welcome to the team!</h4>
				<p>Here are some things for you can get stated...</p>
			</div>
			<div className={classes.welcome__container}>
				<div className={classes.welcome__container__box}>
					<Image
						src="/welcome/add.png"
						alt="Welcome action image"
						width={200}
						height={200}
					/>
					<button>Add more people</button>
				</div>
				<div className={classes.welcome__container__box}>
					<Image
						src="/welcome/create.png"
						alt="Welcome action image"
						width={200}
						height={200}
					/>
					<button>Create more channels</button>
				</div>
				<div className={classes.welcome__container__box}>
					<Image
						src="/welcome/faq.png"
						alt="Welcome action image"
						width={200}
						height={200}
					/>
					<button>Open the FAQs</button>
				</div>
			</div>
		</div>
	);
};

export default WelcomeScreen;
