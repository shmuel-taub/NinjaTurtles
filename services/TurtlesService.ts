
import { TurtleObj } from '../src/interfaces'

// let URL = "http://localhost/turtles"
let URL = "../data.json"

async function getTurtles(): Promise<TurtleObj[]> {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json
      } catch (error: any) {
        console.error(error.message);
      }
    return []
}


export default getTurtles