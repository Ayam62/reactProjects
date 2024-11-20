import styles from './Item.module.css'

const Item=(props)=>{
   
    return(
    <li key={props.foods} className={`${styles['kg-item']} list-group-item`}>
         {props.foods}
         <button
            onClick={props.handleBuy}
          className={`${styles.button} btn btn-info`}>Buy</button>
        </li>
        )
}
export default Item