import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);
	let found = store.favorites.find(elem => elem == props.person.name);

	return (
		<div className="d-flex flex-sm-row flex-wrap p-3">
			<div className="card" style={{ width: "" }}>
				<img src={props.img} className="card-img-top w-75 mx-auto" alt="..." />
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
					<Link
						to={{
							pathname: "/details/" + props.id,
							state: props
						}}>
						<button type="button" className="btn btn-primary">
							Details
						</button>
					</Link>
					<button
						onClick={found ? null : actions.addToFavorites(props.person.name)}
						type="button"
						className="btn btn-primary">
						{found ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	person: PropTypes.object,
	label1: PropTypes.string,
	label2: PropTypes.string,
	label3: PropTypes.string,
	id: PropTypes.string,
	img: PropTypes.string
};
