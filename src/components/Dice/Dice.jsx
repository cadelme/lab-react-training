import { useState } from "react"
import './Dice.css'
import diceEmpty from '../../assets/dice-empty.png'
import diceOne from '../../assets/dice1.png'
import diceTwo from '../../assets/dice2.png'
import diceThree from '../../assets/dice3.png'
import diceFour from '../../assets/dice4.png'
import diceFive from '../../assets/dice5.png'
import diceSix from '../../assets/dice1.png'


const Dice = () => {
    const randomArray = [diceEmpty, diceTwo, diceThree, diceFour, diceFive, diceSix]
    const [random, setRandom] = useState(diceThree)
    const Random = () => {
        setRandom(diceEmpty)
        const face = Math.floor(Math.random() * randomArray.length)
        setTimeout(() => {
            setRandom(randomArray[face])
        }, 1000);
    }
    return (
        <div onClick={Random} className="dice-container">
            <img className="dice" src={random} alt="" />
        </div>
    )
}
export default Dice