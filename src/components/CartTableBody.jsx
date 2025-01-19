import CartItem from "./CartItem"
import { useEffect, useState } from "react"

export default function CartTableBody(props){

    const [subtotal, setSubtotal] = useState([])

    const handleCalculateSubtotal = (data) => {
        if(subtotal.some(item => item.product === data.product)){
            const newSubtotal = JSON.parse(JSON.stringify(subtotal))
            console.log(newSubtotal)
            newSubtotal[newSubtotal.map(x => x.product).indexOf(data.product)].subtotal = data.subtotal 
            setSubtotal(newSubtotal)
        }else{
            // const newSubtotal = JSON.parse(JSON.stringify(subtotal))
            const newSubtotal = subtotal

            newSubtotal.push(data)
            setSubtotal(newSubtotal)
        }
    }
    useEffect(()=>{
        props.updateSubtotal(subtotal)
    },[subtotal])

    const updateCart = (itemName) => {
        const updatedData = props.data.filter(item => item.name !== itemName).map(item => item.name)
        
        localStorage.setItem("cart",JSON.stringify(updatedData))
        document.location.reload()
    }

    return(
        <tbody>
        {
            props.data.map((item,index)=>{
                return(
                    <CartItem
                    key={index}
                    image={item.imageUrl}
                    name={item.name}
                    price={item.price}
                    updateSubtotal={handleCalculateSubtotal}
                    deleteItem={updateCart}
                    />
                )
            })
        }
        </tbody>
    )
}