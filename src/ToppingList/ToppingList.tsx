
import Topping from '../Topping/Topping';
import Msg from '../Msg/Msg';
import styles from './ToppingList.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../services/Store';

function ToppingList() {
    const msg = useSelector((state: RootState) => state.error.msg)
    const toppings = useSelector((state: RootState) => state.toppings.topps)
    let className = toppings.length >= 5 ? "order-end" : "order-on"
  return (
    <>
    <h3>Our order:</h3>
    <div className={styles["toppings"]}>
    {toppings.map((e, i)  =>  {
        return <Topping topping={e} key={i} className={className}/>
      })}
      </div>
      <Msg msg={msg} />
    </>
  )
}

export default ToppingList
