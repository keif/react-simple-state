import React from "react";
import "./room.css";

import Button from "./../components/Button";

class Room extends React.Component {
	state = {
		isLightOn: true
	};

	switchOnLight = () => {
		this.setState({
			isLightOn: true
		});
	};

	switchOffLight = () => {
		this.setState({
			isLightOn: false
		});
	};

	toggleLight = () => {
		this.setState({
			isLightOn: !this.state.isLightOn
		});
	};

	render() {
		const brightness = this.state.isLightOn ? "lit" : "dark";
		return (
			<div className={`room ${brightness}`}>
				The room is {brightness}
				<br />
				<Button onClick={this.toggleLight} value="flip" />
				<Button onClick={this.switchOnLight} value="on" />
				<Button onClick={this.switchOffLight} value="off" />
			</div>
		);
	}
}

export default Room;
