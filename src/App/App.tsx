
import styles from "./App.module.css"

import Turtle from "../Turtle/Turtle.tsx"
import ToppingList from '../ToppingList/ToppingList';
import { useState } from 'react';
import getTurtles from "../../services/TurtlesService"
import { ToppingObj } from '../interfaces'


const turtles = await getTurtles()



function App() {
    return <div className={styles["main-container"]}>
        <h1>Ninja Turtles</h1>
        <h2>Order Pizza with the turtles</h2>
        <div className={styles["turtles-container"]}>
            {turtles.map((turtle, i) => {
                 return <Turtle key={i} turtle={turtle} />
        })}
        </div>
        <ToppingList />
        
    </div >
}

export default App
