"use client";
import { useState } from "react";
import classes from "../../dashboard.module.scss";
import EmptyList from "./EmptyList";
import InvitedCard from "./InvitedCard";
import { InvitedItemProps } from "@/types";

const InvitedList = () => {
	const [invitedList, setInvitedList] = useState<InvitedItemProps[]>([]);

	let content = null;

	if (invitedList.length === 0) {
		content = <EmptyList />;
	} else {
		content = (
			<div className={classes.invitedList__container_content}>
				{invitedList.map((item, index) => (
					<InvitedCard key={item._id} data={item} />
				))}
			</div>
		);
	}

	return (
		<div className={classes.invitedList}>
			<div className={classes.invitedList__container}>{content}</div>
		</div>
	);
};

export default InvitedList;
