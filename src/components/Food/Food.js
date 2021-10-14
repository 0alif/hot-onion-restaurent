import React, { useEffect, useState } from 'react';
import { Container, Row, Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import './Food.css';


const Food = () => {
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);

    // load breakfast data
    useEffect(() => {
        fetch('./breakfastData.json')
            .then(res => res.json())
            .then(data => setBreakfast(data));
    }, []);

    // load lunch data
    useEffect(() => {
        fetch('./lunchData.json')
            .then(res => res.json())
            .then(data => setLunch(data));
    }, []);

    // load dinner data
    useEffect(() => {
        fetch('./dinnerData.json')
            .then(res => res.json())
            .then(data => setDinner(data));
    }, []);

    return (
        <div>
            <Tabs defaultActiveKey="lunch" id="uncontrolled-tab-example" className="mb-3 justify-content-center">
                <Tab eventKey="breakfast" title="Breakfast">
                    <Container>
                        <Row xs={1} lg={3} md={2} sm={1} className="g-5">
                            {
                                breakfast.map(food => <Breakfast key={food.id} food={food}></Breakfast>)
                            }
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="lunch" title="Lunch">
                    <Container>
                        <Row xs={1} lg={3} md={2} sm={1} className="g-5">
                            {
                                lunch.map(food => <Lunch key={food.id} food={food}></Lunch>)
                            }
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="dinner" title="Dinner">
                    <Container>
                        <Row xs={1} lg={3} md={2} sm={1} className="g-5">
                            {
                                dinner.map(food => <Dinner key={food.id} food={food}></Dinner>)
                            }
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
            <div className="text-center my-5 py-3">
                <button className="btn btn-secondary px-5">Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Food;
