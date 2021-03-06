import React, { useContext } from "react";
import { RewardsContext } from "../../../context/RewardsContext";
import Button from "../../UI/Button";
import classes from "./RewardItem.module.css";

const RewardItem = (props) => {
	const rewardsCtx = useContext(RewardsContext);
	const setModalIsOpen = rewardsCtx.setModalIsOpen;
	const setSelectedOption = rewardsCtx.setSelectedOption;

	function onClickHandler() {
		setSelectedOption(props.id);
		setModalIsOpen(true);
	}
	return (
		<div className={`${classes.RewardItem} ${props.leftNumber === 0 ? `${classes.Disabled}` : ""} `}>
			<div className={classes["rewardItem-header"]}>
				<h4>{props.title}</h4>
				<h4>Pledge ${props.pledge} or more</h4>
			</div>
			<p>{props.description}</p>
			<div className={classes["rewardItem-footer"]}>
				<p id={classes.leftNumber}>
					{props.leftNumber} <span>left</span>
				</p>
				<Button onClick={onClickHandler} classCss={props.leftNumber === 0 ? "OutOfStock" : "RewardButton"} leftNumber={props.leftNumber}>
					{props.leftNumber === 0 ? "Out of Stock" : "Select Reward"}
				</Button>
			</div>
		</div>
	);
};

export default RewardItem;
