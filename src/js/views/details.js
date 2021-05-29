import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = props => {
	// const { store, actions } = useContext(Context);

	const params = useParams();
	const locationProps = useLocation().state;
	return (
		<div className="card mb-3" style={{ maxWidth: "540px" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={locationProps.img} className="card-img" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{locationProps.person.name}</h5>
						<p className="card-text">
							{locationProps.label1}
							{locationProps.person.height}
						</p>
						<p className="card-text">
							{locationProps.label2}
							{locationProps.person.gender}
						</p>
						<p className="card-text">
							{locationProps.label3}
							{locationProps.person.eye_color}
						</p>
						<p className="card-text">
							<small className="text-muted" />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};
