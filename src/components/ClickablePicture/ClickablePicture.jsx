import { useState } from 'react'
import './ClickablePicture.css'
import maxence from './../../assets/maxence.png'
import maxenceGlasses from './../../assets/maxence-glasses.png'


const ClickablePicture = () => {

    const [glasses, setLike] = useState(false)

    const handleLike = () => {
        setLike(!glasses)
    }

    return (
        <div className="LikeButton" onClick={handleLike}>
            <img src={glasses ? maxence : maxenceGlasses} alt="" />
            {
                glasses ?
                    <p>No tiene estilo :D</p> :
                    <p>Parece que lleva Gafas D:</p>
            }
        </div>
    )
}

export default ClickablePicture
