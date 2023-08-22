import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({name, img, car, rating}) => {

    return (
        <>
        <div className="RectDriver">
            <div className="ImageDriven">
                <img src={img} alt={name}></img>
            </div>
          
            <div className="Details">
              <p className="Name">{name}</p>
              <p><Rating>{rating}</Rating></p>
              <p>{car.model}</p>
              <p>{car.licensePlate}</p>
            </div>
        </div>
        </>
    )




}

export default DriverCard


