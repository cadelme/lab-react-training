import './Greetings.css'

const Greetings = ({ lang, children}) => {

    switch (lang) {
        case "de":
            return (
                <>
                <div className="Hi">Hallo {children}</div>
                </>
            )
          break;
        case "en":
            return (
                <>
                <div className="Hi">Hello {children}</div>
                </>
            )
    
        case "es":
            return (
                <>
                 <div className="Hi">Hola {children}</div>
                </>
            )
        case "fr":
            return (
                <>
                 <div className="Hi">Bonjour {children}</div>
                </>
            )
      }

    return (
        <>
        <div className={'Df'}>
                
        </div>
        </>
    )
}

export default Greetings