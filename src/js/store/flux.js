const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addToFavorites: name => {
				//get the store
				let newFavorites = getStore().favorites;
				newFavorites.push(name);

				setStore({ favorites: newFavorites });
			},
			removeFromFavorites: index => {
				let newFavorites = getStore().favorites;
				let newestFavorites = newFavorites.filter((e, i) => i != index);

				setStore({ favorites: newestFavorites });
			}
		}
	};
};

export default getState;
