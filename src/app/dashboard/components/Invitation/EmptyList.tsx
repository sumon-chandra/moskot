import classes from "../../dashboard.module.scss";

const EmptyList = () => {
	return (
		<div className={classes.emptyInvitedList}>
			<div className={classes.emptyInvitedList__container}>
				<h3>There are no invitations!!</h3>
			</div>
		</div>
	);
};

export default EmptyList;
