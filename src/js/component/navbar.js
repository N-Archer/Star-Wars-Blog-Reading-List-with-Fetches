import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = props => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="nav-logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
				/>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-primary">
					Favorites <span className="badge badge-light" />
				</button>
				<ul>
					{store.favorites.map((elm, i) => {
						return <li key={i}>{elm}</li>;
					})}
				</ul>
			</div>
		</nav>
	);
};
