// import './bootstrap.min.css'

import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#013645" }} expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="https://3.files.edl.io/13a9/21/08/13/201110-34ceba90-aad4-4b0a-832a-01b29c744898.png" width="30" height="30" className="d-inline-block align-top" />
            {' '}
            <span className='text-light'>Student App</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Navbar.Text>
              <Link to={"/"} style={{ backgroundColor: "#04495c", color: "#fcf2f7" }} className='btn btn-light me-3 '>Add Student </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>


<div className='container mt-5 pt-2'>
  <div className="table-responsive">
    <Table style={{ backgroundColor: "#1b4e66" }} className='text-light' responsive="xs">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Batch</th>
          <th>Age</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        {/* More rows */}
      </tbody>
    </Table>
  </div>
</div>







    </>
  )
}

export default App
