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
