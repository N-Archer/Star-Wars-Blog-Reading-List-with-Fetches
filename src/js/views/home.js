import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card.js";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				setCharacters(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});

		fetch("https://swapi.dev/api/planets/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				setPlanets(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});

		fetch("https://swapi.dev/api/starships/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				setVehicles(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div className="container-fluid">
			<h1>Characters</h1>
			<div className="d-flex">
				{characters.length > 1 &&
					characters.map((character, index) => {
						return (
							<Card
								img="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Stormtrooper_%28Star_Wars%29.png/220px-Stormtrooper_%28Star_Wars%29.png"
								label1="Height:"
								label2="Gender:"
								label3="Eye Color:"
								person={character}
								key={index}
							/>
						);
					})}
			</div>
			<div>
				<h1>Planets</h1>
			</div>
			<div>
				<h1>Vehicles</h1>
			</div>
		</div>
	);
};
