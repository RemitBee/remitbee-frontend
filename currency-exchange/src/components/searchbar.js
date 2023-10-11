import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../css/CurrencyConverter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function SearchBarCard() {

    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        Axios.get(`http://16.16.26.112:8800/api/store/`)
            .then((response) => {
                setAPIData(response.data['data']);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        // if (searchInput !== '') {    
            const filteredData = APIData.filter((item) => {
                return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        // }
        // else{
        //     setFilteredResults(APIData)
        // }
    }

    return (
        // <div style={{ padding: 20 }}>
        <Col>
        <div className='center' style={{padding:'10px 140px 10px 140px',borderRadius:'30px'}}>
        <Input icon='search'    
        style={{borderRadius: '50px'}}
            placeholder='Search...'
            onChange={(e) => {
                searchItems(e.target.value)
                const filteredData = APIData.filter((item) => {
                    return Object.values(item.name).join('').toLowerCase().includes(searchInput.toLowerCase())
                })
                setFilteredResults(filteredData)
            }}
        />
        </div>
        <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
            {searchInput.length > 0 ? (
                filteredResults.map((item) => {
                    return (
                        <div style={{height:'30px', textAlign:'center'}} >  
                             
                        <Card style={{}}>
                          
                            <Card.Content style={{height:'27px',}} >
                            <Link to='/StoreDetail'>  
                                <Card.Header>{item.name}</Card.Header>
                                </Link>     
                            </Card.Content>
                          
                        </Card>
                        
                        </div>
                    )
                })
            ) : (
                APIData.map((item) => {
                    return (
                        <div style={{height:'30px', textAlign:'center'}}>
                        <Card style={{}}>
                            <Card.Content style={{height:'27px',}} >
                                <Card.Header >{item.name}</Card.Header>
                            </Card.Content>
                        </Card>
                        </div>
                    )
                })
            )}
        </Card.Group>
        </Col>
    // </div>
    );
}

export default SearchBarCard;