export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            loading: false,
            planets : [],
            people: [],
            favorites: [],
            
        },
        actions: {
            setLoading(status) {
                setStore({loading: status})
            },
            toggleLoader() {
                const store = getStore()
                setStore({loading: !store.loading})
            },

            getPlanets() {
                const store = getStore() 
                if (store.planets.length === 0) {  
                    const endpoint = "https://swapi.dev/api/planets/";
                    const config = {
                        method: "GET"
                    }
                    fetch(endpoint,config).then((response) => {
                        return response.json()
                    }).then((json) => {
                        setStore({ planets: json.results })
                    })
                }
            },

            getPeople() {
                const store = getStore()
                if (store.planets.length === 0) {
                    const endpoint = "https://swapi.dev/api/people/";
                    const config = {
                        method: "GET"
                    }
                    fetch(endpoint,config).then((response) => {
                        return response.json()
                    }).then((json) => {
                        setStore({ people: json.results })
                    })
                }
            },
            addList(item) {
                const store = getStore()
                if (store.favorites.includes(item) == true) {
                    let newList = store.favorites.filter((element, index) => {
                        return(element != item)
                    })
                    setStore({favorites: newList})
                } else {
                    const newList = [...store.favorites]
                    newList.push(item)
                    setStore({favorites: newList})
                }
                console.log(store.favorites);
                
            },    
            deleteList(item) {
                const store = getStore()
                let newList = store.favorites.filter((element, index) => {
                        return(element != item)
                })
                setStore({favorites: newList})
                console.log(store.favorites);
            }   
        }
    }
}