
import Topping from '../Topping/Topping';
import Msg from '../Msg/Msg';
import styles from './ToppingList.module.css'
import { ToppingObj } from '../interfaces'
import { useContext } from 'react'
import ToppingContext from "../../services/toppingsProvider"

interface contectType {
    toppings: ToppingObj[];
    setList: (someParam:ToppingObj[]) => void;
    msg: string;
    setMsg: (someParam: string) => void;
}

function ToppingList() {
    const contextInfo: contectType = useContext<contectType>(ToppingContext);
    let className = contextInfo.toppings.length >= 5 ? "order-end" : "order-on"
  return (
    <>
    <h3>Our order:</h3>
    <div className={styles["toppings"]}>
    {contextInfo.toppings.map((e, i)  =>  {
        return <Topping topping={e} key={i} className={className}/>
      })}
      </div>
      <Msg msg={contextInfo.msg} />
    </>
  )
}

export default ToppingList
