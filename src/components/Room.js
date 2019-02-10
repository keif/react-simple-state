import React from "react";
import "./room.css";
class Room extends React.Component {
	state = {
		isLightOn: true
	};

	flipLight = () => {
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
				<button onClick={this.flipLight}>flip</button>
			</div>
		);
	}
}

export default Room;
