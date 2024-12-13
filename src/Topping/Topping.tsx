
import styles from './Topping.module.css'
import { ToppingObj } from '../interfaces'

interface propType {
  topping: ToppingObj;
  className: string;
}

function Topping(propInfo: propType) {
  const { className, topping: {name, img: image}} = propInfo
  return (
    <>
      <div className={styles[className]}>
        <p>{name}</p>
        <img src={image} className={styles.img}  alt={name + " img"} />
      </div>
    </>
  )
}

export default Topping
