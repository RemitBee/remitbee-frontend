import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../css/CurrencyConverter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StoreCurrencyCovert(props) {
    var currency= props.currency;
    // Initializing all the state variables
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("lkr");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);

    // Calling the api whenever the dependency changes
    useEffect(() => {
        // Axios.get(
        //     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
        //     .then((res) => {
                setInfo(currency);
                setFrom(currency.currency)
            // })
    }, [from]);

    // Calling the convert function whenever
    // a user switches the currency
    useEffect(() => {
        setOptions(Object.keys(info.currency));
        convert();
    }, [info])

    // Function to convert the currency
    function convert() {
        var rate = info.rate;
        setOutput(input * rate);
    }

    // Function to switch between two currency
    function flip() {
        var temp = from;
        setFrom(to);
        setTo(temp);
    }

    return (
        <Row className="mb-15">
        <Col>
        <h5>Enter the amount</h5>
           <input style={{height:'41px', width:'300px', fontSize:'15px'}} type="text"
                           placeholder="Enter the amount"
                           onChange={(e) => {
                            setInput(e.target.value)
                            var rate = info[to];
        setOutput(e.target.value * rate);
                           }} />
              </Col>
              <Col>
                          <h5>From</h5>
                  <Dropdown style={{height:'50px', width:'300px'}} options={options}
                              onChange={(e) => { setFrom(e.value) }}
                              value={from} placeholder="From" />
              </Col> 
              <Col>
              <h5>Converted ammount</h5>
           <input style={{height:'41px', width:'300px', fontSize:'15px'}} type="text"
                           placeholder="Converted amount"
                           value={ output.toFixed(2) } />
              </Col>  
              <Col>
                       <h5>To</h5>
                       <input style={{height:'41px', width:'300px', fontSize:'15px'}} type="text" readOnly
                           value={to}/>
              </Col>
      </Row>

        // <div className="App">
        //     <div className="container">
        //         <div className="left">
        //             <h3>Amount</h3>
        //             <input type="text"
        //                    placeholder="Enter the amount"
        //                    onChange={(e) => {
        //                     setInput(e.target.value)
        //                     var rate = info[to];
        // setOutput(e.target.value * rate);
        //                    }} />
        //         </div>
        //         <div className="middle">
        //             <h3>From</h3>
        //             <Dropdown options={options}
        //                       onChange={(e) => { setFrom(e.value) }}
        //                       value={from} placeholder="From" />
        //         </div>
        //         <div className="right">
        //             <h3>To</h3>
        //             <Dropdown options={options}
        //                       onChange={(e) => { setTo(e.value) }}
        //                       value={to} placeholder="To" />
        //         </div>
        //     </div>
        //     <div className="result" >
        //         <h3>Converted Amount {input + " " + from + " = " + output.toFixed(2) + " " + to}</h3>

        //     </div>
        // </div>
    );
}

export default StoreCurrencyCovert;