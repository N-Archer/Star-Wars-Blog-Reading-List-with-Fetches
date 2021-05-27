import React, { Component } from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.person.name}</h5>
				<p className="card-text">
					{props.label1} {props.person.height}
				</p>
				<p className="card-text">
					{props.label2} {props.person.gender}
				</p>
				<p className="card-text">
					{props.label3} {props.person.eye_color}
				</p>
				<button type="button" className="btn btn-primary">
					Details
				</button>
				<button type="button" className="btn btn-primary">
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	person: PropTypes.object,
	label1: PropTypes.string,
	label2: PropTypes.string,
	label3: PropTypes.string,
	img: PropTypes.string
};
