import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {


    const divStyle = {
        backgroundColor: 'rgb(' + r + ',' + g+ ',' + b + ')'
    }
    const componentToHex = c => {
        const hex = c.toString(16)
        return hex.length == 1 ? '0' + hex : hex
    }
    const rgbToHex = (r, g, b) => {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
    }
    return (
        <>
        <div className={'rect'} style={divStyle}>
        <p className="cw">{divStyle.backgroundColor}</p>
        <p className="cw">{rgbToHex(r,g,b)}</p>
        </div>
        </>
    )
}

export default BoxColor