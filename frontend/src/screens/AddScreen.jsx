import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {FaHome} from 'react-icons/fa';

const AddScreen = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username : "",
    name : "",
    price: "",
    quantity: ""
  });

  const addItem = async (e) => {
    e.preventDefault();
    const { username, name, price, quantity } = data;

    try {
        const { data } = await axios.post('http://localhost:4000/items/', {
            username,
            name,
            price,
            quantity
        })
    if (data.error) {
        console.log("error!")
    } else {
        setData({});
        console.log('edit successfull')
        navigate('/add')
    }
    } catch (error) {
        const { username, name } = error.response.data
        if (username) {
            console.log(username)
        } else if(name) {
            console.log(name)
        } else
            {
        console.log('error')
        }
    }
  }
    return (
        <Container>
            <h1>Add Item</h1>
            <Link to="/"><FaHome /> </Link>

            <Form onSubmit={addItem}>
                <Form.Group controlId='username' className='my-3'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter username'
                        value={data.username}
                        onChange={(e) => setData({...data, username : e.target.value})}
                    ></Form.Control>    
                </Form.Group>

                <Form.Group controlId='name' className='my-3'>
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter item name'
                        value={data.name}
                        onChange={(e) => setData({...data, name : e.target.value})}
                    ></Form.Control>    
                </Form.Group>

                <Form.Group controlId='price' className='my-3'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter price'
                        value={data.price}
                        onChange={(e) => setData({...data, price : e.target.value})}
                    ></Form.Control>    
                </Form.Group>


                <Form.Group controlId='quantity' className='my-3'>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter quantity'
                        value={data.quantity}
                        onChange={(e) => setData({...data, quantity : e.target.value})}
                    ></Form.Control>    
                </Form.Group>

                    <Button
                        type='submit'
                        variant='primary'
                        className='mt-2'
                    >
                      Add
                    </Button>
            </Form>
        </Container>
    );
};
export default AddScreen;