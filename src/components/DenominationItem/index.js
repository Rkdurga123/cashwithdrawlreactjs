// Write your code here
import "./index.css";

const DenominationItem =(props){
    const {denominationDetails,onChangeAmount}=props;
    const {value}=denominationDetails;

    const change=()=>{
        onChangeAmount(value);
    }
    
    return (
        <div>
            <li className="list-container">
            <button type="button" className="btn" onClick={change}>{value}</button>
            </li>
        </div>
    )
}

export default DenominationItem;