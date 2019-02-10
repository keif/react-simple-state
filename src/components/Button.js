import React from "react";
import "./button.css";
class Button extends React.Component {
	_onClick = () => {
		if (this.props.onClick) {
			this.props.onClick();
		}

		this.toggleSwitch();
	};

	state = {
		isSwitched: true
	};

	toggleSwitch = () => {
		this.setState({
			isSwitched: !this.state.isSwitched
		});
	};

	render() {
		const switched = this.state.isSwitched ? "on" : "off";
		return (
			<button className={`${switched}`} onClick={this._onClick}>
				{this.props.value}
			</button>
		);
	}
}

export default Button;
