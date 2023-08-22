import { useState } from 'react'
import './LikeButton.css'


const LikeButton = () => {
    

    const [counterValue, setCounterValue] = useState(0)

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1)
    }

    return (
        <div className="Counter">
            <button onClick={incrementCounterValue}> {counterValue} Likes </button>
            
        </div>
    )
}

export default LikeButton