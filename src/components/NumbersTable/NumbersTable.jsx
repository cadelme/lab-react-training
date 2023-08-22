
import './NumbersTable.css'

const NumbersTable = ({limit}) => {

        const divs = [];
        
        for (let i = 0; i < limit; i++) {
          divs.push(<div key={i} className={`divNumber ${i % 2 ? 'red' : 'white'}`}>{i + 1}</div>);
        }
      
        return (
          <div className='Grid'>
            {divs}
          </div>
        )
    
}





export default NumbersTable