import React from "react";
import "./room.css";
class Room extends React.Component {
	state = {
		isLightOn: true
	};

    switchOnLight = () => {
		this.setState({
			isLightOn: true
		});
    }

    switchOffLight = () => {
		this.setState({
			isLightOn: false
		});
    }

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
				<button onClick={this.toggleLight}>flip</button>
                <button onClick={this.switchOnLight}>on</button>
                <button onClick={this.switchOffLight}>off</button>
			</div>
		);
	}
}

export default Room;
