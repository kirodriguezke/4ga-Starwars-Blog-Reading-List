import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";

import Card from "../components/card.js"

export default function(props) {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanets()
        actions.getPeople()
    }, [])

    return (
        <div className="container">
            
            <h1>Characters</h1>
            <div className="scroll-horizontal">
                {store.people.map((person, index) => 
                    <Card key={index} name={person.name} resource="people" id={index} element={person}>
                        <p>Hair Color: {person.hair_color}</p>
                        <p>Eye-Color: {person.eye_color}</p>
                    </Card>
                )}
            </div>

            <h1>Planets</h1>
            <div className="scroll-horizontal">
                {store.planets.map((planet, index) => 
                    <Card key={index} name={planet.name} resource="planets" id={index}>
                        <p className="card-text">Population: {planet.population}</p>
                        <p className="card-text">Terrain: {planet.terrain}</p>
                    </Card>
                )}
            </div>


          
        </div>
    )
}