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

	if (user?.role === "admin") {
		return (
			<>
				<Banner />
				<Teams />
			</>
		);
	}

	if (user?.role === "user") {
		return <InvitedList />;
	}
}
