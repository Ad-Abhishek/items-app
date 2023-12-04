import {Table, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AddScreen from '../screens/AddScreen';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';

const ItemTable = ( {item} ) => {
    return(
        <>
        <Link to="/"><FaHome /> </Link>
        <Table striped bordered hover variant="dark" className='mx-5 my-4'>
            <thead>
                <tr>
                <th>Username</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    item.map((ite) => (
                        <tr key={ite._id}>
                            <td>{ite.username}</td>
                            <td>{ite.name}</td>
                            <td>{ite.price}</td>
                            <td>{ite.quantity}</td>
                            <td>
                                <Button variant="info" size="sm" >
                                    <FaEdit />
                                </Button>
                                {' '}
                                <Button variant="danger" size="sm" >
                                    <FaTrash />
                                </Button>
                            </td>
                        </tr>
                    ))
                }         
            </tbody>
        </Table>

        <Link to="/add">
        <Button
                    variant='primary'
                    className='ms-5'
                    onClick={() => <AddScreen />}
        >
                    Add item
        </Button>
        </Link>
        </>
    );
};

export default ItemTable;