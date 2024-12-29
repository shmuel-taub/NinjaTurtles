
import { TurtleObj, ToppingObj } from "../interfaces"
import styles from "./Turtle.module.css"
import { useSelector, useDispatch } from "react-redux"
import {  RootState } from "../../services/Store"
import { setErr } from "../../services/MsgSlice"
import { addTop } from "../../services/ToppingsSlice"

function Turtle(props: {turtle: TurtleObj}) {
    const {name, img, pizzaToppings} = props.turtle
    const toppings = useSelector((state: RootState) => state.toppings.topps)
    const dispatch = useDispatch()
    function chooseTopping(topping: ToppingObj) {
        if (toppings.length >= 5)
            dispatch(setErr("to many toppings"))
        else if (toppings.filter(top => top.name === topping.name).length > 0)
            dispatch(setErr("this topping had chosen already"))
        else {
            dispatch(addTop(topping))
            dispatch(setErr(""))
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