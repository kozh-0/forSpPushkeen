export default function NotFound () {

    const gifSrc = "https://psv4.vkuseraudio.net/s/v1/d/U2pgEzBMXyAuqr0kQsN_MlAK1iYb7JEeJ_oEXnS0-TLO7QqfqgJ6giNAZg4Pv9QMEdeogPtfMGUndJSecJ9ByVybR9mHQp81UcPkcR0F61aZJ1g9ep6keA/1586129214529.gif"
    
    const style = {
      display: 'flex', 
      alignItems: 'center', 
      flexDirection: 'column'
    };
  
    return (
        <div style={style} className="content">
            <img 
                style={{height: '124px'}}
                src={gifSrc} 
                alt="gif"
            />
            <h2 style={{padding: '7px 0'}}>Страницы не существует</h2> 
            <h2>¯\_(ツ)_/¯</h2>
        </div>
    );
  };