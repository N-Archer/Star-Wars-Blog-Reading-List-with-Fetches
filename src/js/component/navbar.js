import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	const [showDropDown, setShowDropDown] = useState(false);
	const [clickedDropDown, setClickedDropDown] = useState(false);
	let show = "";
	if (clickedDropDown) show = "show";

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					className="nav-logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
				/>
			</Link>
			<div className={"ml-auto dropdown" + (showDropDown ? "show" : "")}>
				<button
					onClick={() => setClickedDropDown(!clickedDropDown)}
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded={clickedDropDown}>
					Favorites <span className="badge badge-light">{store.favorites.length}</span>
				</button>
				<div
					className={store.favorites.length > 0 ? "dropdown-menu bg-light " + show : "d-none"}
					aria-labelledby="dropdownMenuButton">
					{store.favorites.map((elm, i) => {
						return (
							<li className="dropdown-item" key={i}>
								{elm}{" "}
								<button type="button" className="close" aria-label="Close">
									<span onClick={() => actions.removeFromFavorites(i)} aria-hidden="true">
										&times;{" "}
									</span>
								</button>
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
