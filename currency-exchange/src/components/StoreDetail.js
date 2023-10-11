import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import StoreCurrencyCovert from './storeCurrencyConveter'

const  SearchDeatil = (props) =>  {
//   render() {
//     var onItemizedItemEdit = this.props.onItemizedItemEdit;
const location = useLocation();
    const propsData = location.state;
    return (
        <Card className="p-4 p-xl-2 my-xl-3" style={{alignContent:'center'}} >
            <Col>
            <h2>{propsData.item.name}</h2>
            <p>Address - {propsData.item.address}</p>
            <p>Town - {propsData.item.town}</p>
            </Col>
            </Card>
    );

//   }

}

export default  SearchDeatil;
