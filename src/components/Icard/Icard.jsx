import './Idcard.css'

const Idcard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <>
        <div className={'Df'}>
                <div className={'Img'}><img src={picture}></img></div>
                <div>
                    <p className={'Icard'}>{lastName}</p>
                    <p className={'Icard'}>{firstName}</p>
                    <p className={'Icard'}>{gender}</p>
                    <p className={'Icard'}>{height}</p>
                    <p className={'Icard'}>{birth.toDateString}</p>
                    <p className={'Icard'}>{picture}</p>
                </div>
        </div>
        </>
    )
}

export default Idcard