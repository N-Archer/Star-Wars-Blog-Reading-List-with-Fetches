const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiAddress: "https://3000-copper-tarsier-n1usd9mo.ws-us11.gitpod.io",
			user: "pedro",
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			login: (username, password) => {
				fetch(getStore().apiAddress + endpoint + entity_id, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: "pedro",
						password: "soccer"
					})
				})
					.then(function(response) {
						if (!response.status) {
							throw Error(response.statusText);
						}
						if (response.status == 401) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						// console.log(responseAsJson);
						// setStore({ users: responseAsJson.token });
						localStorage.setItem("jwt-token", responseAsJson.token);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			get_auth: (username, password) => {
				// retrieve token form localStorage
				const token = localStorage.getItem("jwt-token");

				fetch(getStore().apiAddress + "/auth", {
					method: "GET",
					headers: { Authorization: "Bearer " + token } // ⬅ authorization token
				})
					.then(resp => {
						if (resp.ok) resp.json();
						else if (resp.status === 403) {
							console.log("Missing or invalid token");
						} else {
							throw Error("Unknown error");
						}
					})
					.then(data => {
						// success
						console.log("This is the data your requested", data);
					})
					.catch(error => console.error("There has been an uknown error", error));
			},
			// Use getActions to call a function within a fuction
			loadFavorites: () => {
				fetch(getStore().apiAddress + "/" + getStore().user + "/favorites")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseJson);

						setStore({ favorites: responseJson.favorites });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			addToFavorites: (entity_type, entity_name, entity_id) => {
				let endpoint = "";
				if (entity_type == "person") {
					endpoint = "/favorite/person/";
				} else {
					endpoint = "/favorite/planet/";
				}
				fetch(getStore().apiAddress + endpoint + entity_id, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						entity_name: entity_name,
						username: getStore().user
					})
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseJson);

						setStore({ favorites: responseJson.favorites });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			removeFromFavorites: (entity_type, entity_id) => {
				let endpoint = "";
				if (entity_type == "person") {
					endpoint = "/favorite/person/";
				} else {
					endpoint = "/favorite/planet/";
				}
				fetch(getStore().apiAddress + endpoint + entity_id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: getStore().user
					})
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseJson);

						setStore({ favorites: responseJson.favorites });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			// addToFavorites: name => {
			// 	//get the store
			// 	let newFavorites = getStore().favorites;
			// 	newFavorites.push(name);

			// 	setStore({ favorites: newFavorites });
			// },
			removeFromFavorites: index => {
				let newFavorites = getStore().favorites;
				let newestFavorites = newFavorites.filter((e, i) => i != index);

				setStore({ favorites: newestFavorites });
			}
		}
	};
};

export default getState;
