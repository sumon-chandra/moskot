"use client";

import { useSelector } from "react-redux";
import Banner from "./components/Banner";
import InvitedList from "./components/Invitation/InvitedList";
import Teams from "./components/Teams";
import classes from "./dashboard.module.scss";
import { RootState } from "../redux/store";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "jsonwebtoken";

export default function Dashboard() {
	const data = useSelector((state: RootState) => state?.auth?.token);
	const user = jwtDecode<JwtPayload>(data);

	let content = null;

	if (user?.role === "admin") {
		content = (
			<div>
				<Banner />
				<Teams />
			</div>
		);
	}

	if (user?.role === "user") {
		content = <InvitedList />;
	}

	return <div className={classes.dashboard}>{content}</div>;
}
