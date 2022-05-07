import React from "react";
import RewardItem from "./RewardItem";
import classes from "./RewardsList.module.css";

let REWARDS = [
	{
		id: 1,
		title: "Bamboo Stand",
		pledge: "Pledge $25 or more",
		description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		leftNumber: "101",
	},

	{
		id: 2,
		title: "Black Edition Stand",
		pledge: "Pledge $75 or more",
		description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		leftNumber: "64",
	},

	{
		id: 3,
		title: "Mahogany Special Edition",
		pledge: "Pledge $200 or more",
		description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		leftNumber: "0",
	},
];

const RewardsList = () => {
	return (
		<div className={classes.RewardsList}>
			{REWARDS.map((reward) => {
				return <RewardItem key={reward.id} title={reward.title} pledge={reward.pledge} description={reward.description} leftNumber={reward.leftNumber} />;
			})}
		</div>
	);
};

export default RewardsList;