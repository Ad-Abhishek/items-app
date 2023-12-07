import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import ItemService from '../services/ItemService';
import axios from 'axios';


const UpdateScreen = ( ) => {

    let itemId  = useParams();

    const navigate = useNavigate();
    const [data, setData] = useState({
        username : "",
        name : "",
        price: "",
        quantity: ""
    });

//    const url = `http://localhost:4000/items/${itemId}`
const url = 'http://localhost:4000/items/656db1f55160d97ef8403c0f'

    useEffect(() => {
        // ItemService.getItemById(itemId)
        axios
            .get(url)
        .   then((res) => {
                setData(() => {
                    console.log(res.data)
                return res.data;
                });
            }) 
            .catch((err) => {
                console.log(err);
            }); 
    }, [url]);

    const updateItem = async (e) => {
        e.preventDefault();
        const { username, name, price, quantity } = data;

        try {
            // const { data } = await ItemService.updateItem(id , {
            const { data } = await axios.put(url, {
                username,
                name,
                price,
                quantity
            })
            if (data.error) {
                toast.error("Error! Try again");
            } else {
                toast.success("Update successful");
                navigate('/items')
            }
        } catch (error) {
            toast.error(error);
    }
}

  return (
    <Container>
    
      <Form onSubmit={updateItem}>
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
                      Update
                    </Button>
            </Form>
  </ Container> 
  );
};

export default UpdateScreen;