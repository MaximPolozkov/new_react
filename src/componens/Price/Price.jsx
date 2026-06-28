import "../Price/Price.scss";

const Price = ({spisok}) => {
    return (
        <div className="prices">
            <div className="prices__name">
                <h1>Цены на услуги</h1>
            </div>

            <div className="prices__wrapper">
                <table className="prices__table">
                    <tr className="prices__tablewrapper">
                        <th className="prices__liname">Название услуги</th>
                        <th className="prices__liname">Описание</th>
                        <th className="prices__liname">Цена</th>
                    </tr>
                {spisok.slider.map((sli, index) =>{
                    return (
                        
                            <tr className="prices__tablewrapper"  key={index}>
                                <td className="prices__li">{sli.nameUslugi}</td>
                                <td className="prices__li">{sli.diskript}</td>
                                <td className="prices__li">{sli.price}</td>
                            </tr>     
                        
                    )
                })}
                </table>
            </div>
            
        </div>
    )
}

export default Price;