import { useEffect, useState } from "react"
import deleteIcon from "../assets/sections/delete-icon.svg"

export default function CartItem(props){
    const [amount,setAmount] = useState(1)

    useEffect(()=>{
        props.updateSubtotal({product: props.name ,subtotal: amount * props.price})
    },[amount])

    return(
        <tr key={props.index}>
            <td>
                <img
                src={deleteIcon} alt="delete" style={{cursor:"pointer"}}
                onClick={() => props.deleteItem(props.name)}
                />
                <img src={props.image} alt="product" width={54}/>
                {props.name}
                </td>
            <th>${props.price}</th>
            <th><input type="number" value={amount} onInput={(e)=>setAmount(Math.abs(e.target.value))} min={1} max={999}/></th>
            <th>${amount * props.price}</th>
        </tr>
    )
}