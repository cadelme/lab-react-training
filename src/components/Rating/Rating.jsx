import './Rating.css'

const Rating = ({children}) => {

let star = Math.round(Number(children))

switch (star) {
    case 0:
        return (
            <>
            <div className="Star">☆☆☆☆☆</div>
            </>
        )
      break;
    case 1:
        return (
            <>
            <div className="Star">★☆☆☆☆</div>
            </>
        )

    case 2:
        return (
            <>
             <div className="Star">★★☆☆☆</div>
            </>
        )
    case 3:
        return (
            <>
             <div className="Star">★★★☆☆</div>
            </>
        )
    case 4:
        return (
            <>
             <div className="Star">★★★★☆</div>
            </>
        )
    case 5:
        return (
            <>
             <div className="Star">★★★★★</div>
            </>
        )
  }

}

export default Rating


