import './CreditCard.css'
import logoVisa from './../../assets/visa.png'
import logoMaster from './../../assets/mastercardIcon.png'


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner,bgColor,color }) => {

    let logo

    const divStyle = {
        backgroundColor: bgColor,
        color: color
    }

    type==="Visa" ? logo = logoVisa : logo = logoMaster

    let cardStyle = type.split(" ").join("")


    const lastDigits = number.substring(number.length - 4)

    const expireMoth = expirationMonth.toString().padStart(2, '0')

    const expireYear = expirationYear.toString().substring(2,4)
    
    return (
        <>
        <div className="Cards">
            <div className={cardStyle} style={divStyle}>
                <div className="Logo"><img src={logo} alt="Logotipo" /></div>
                <div className="Number">**** **** **** {lastDigits}</div>
                <div className="Expires">{expireMoth}/{expireYear}  <span>{bank}</span></div>
                <div className="Owner">{owner}</div>
                
            </div>
        </div>
        </>
    )
}

export default CreditCard