import {Table, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../App.css'

const ItemTable = ( {item} ) => {
    return(
        <>
        <Table striped bordered hover variant="dark" className='table-style'>
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
        </>
    );
};

export default ItemTable;