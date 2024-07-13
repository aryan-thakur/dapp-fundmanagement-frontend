import './Spendings.css';
import React, {useState, useEffect} from 'react';

function Spendings(props) {
    const [spendings, setSpendings] = useState([]);
    useEffect(() => {
        let getSpendings = async () => {
            if(props.contract){
                setSpendings(await props.contract.spending());
                console.log(props.contract);
            }
        }
        getSpendings();
    }, [props.contract]); 
    
    return (
        <div className='spendingWrapper'>
          <h3>Spending Requests</h3>
        </div>
    );
}

export default Spendings;