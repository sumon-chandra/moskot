import { InvitedItemProps } from "@/types";
import { FC } from "react";

interface InvitedCardProps {
	data: InvitedItemProps;
}

const InvitedCard: FC<InvitedCardProps> = () => {
	return (
		<div>
			<h3>Invited card</h3>
		</div>
	);
};

export default InvitedCard;
