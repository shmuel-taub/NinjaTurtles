
import { TurtleObj, ToppingObj } from "../interfaces"
import styles from "./Turtle.module.css"
import { useContext } from 'react'
import ToppingContext from "../../services/toppingsProvider"

interface contectType {
    toppings: ToppingObj[];
    setList: (someParam:ToppingObj[]) => void;
    msg: string;
    setMsg: (someParam: string) => void;
}

function Turtle(props: {turtle: TurtleObj}) {
    const {name, img, pizzaToppings} = props.turtle
    const {setList, setMsg, toppings} = useContext<contectType>(ToppingContext);
    function chooseTopping(topping: ToppingObj) {
        if (toppings.length >= 5)
            setMsg("to many toppings")
        else if (toppings.filter(top => top.name === topping.name).length > 0)
            setMsg("this topping had chosen already")
        else {
            setList([...toppings, topping])
            setMsg("")
        }

    }
    return <div className={styles["container"]}>
        <h3 className={styles["headers"]}>{name}</h3>
        <img src={img} className={styles["img"]} alt="some img" />
        <h3 className={styles["headers"]}>Toppings:</h3>
        <div className={styles["tops-box"]}>
            {pizzaToppings.map((top, i) => {
                let res = <span className={styles["top"]} key={i} onClick={e => chooseTopping(top)}>{top.name}</span>
                return res
            })}
        </div>

    </div>
}

export default Turtle