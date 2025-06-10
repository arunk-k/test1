// import './bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#033543" }} className=" text-light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://3.files.edl.io/13a9/21/08/13/201110-34ceba90-aad4-4b0a-832a-01b29c744898.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span className='text-light'>Student App</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    <div style={{ backgroundColor: "#1b4e66" }}  className='container mt-5'>
      <Table className='text-light' responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
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
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>

    </>
  )
}

export default App
