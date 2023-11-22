"use client";

import { useSelector } from "react-redux";
import Banner from "./components/Banner";
import InvitedList from "./components/Invitation/InvitedList";
import Teams from "./components/Teams";
import classes from "./dashboard.module.scss";
import { RootState } from "../redux/store";

export default function Dashboard() {
	const user = useSelector((state: RootState) => state?.auth?.user);

	let content = null;

	if (user?.role === "admin") {
		content = (
			<>
				<Banner />
				<Teams />
			</>
		);
	}

	if (user?.role === "user") {
		content = <InvitedList />;
	}

	return <div className={classes.dashboard}>{content}</div>;
}
