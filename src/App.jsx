// import './bootstrap.min.css'
import './App.css'

import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchStudents } from './redux/studentSlice';
import Spinner from 'react-bootstrap/Spinner';


function App() {

  const { students, loading, error } = useSelector(state => state.studentSlice)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStudents())
  }, [])

  return (
    <>

      <Navbar style={{ backgroundColor: "#013645" }} expand="lg" className="">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="/student_icon.jpg" width="60" height="30" className="d-inline-block align-top" />
            {' '}
            <span className='text-light'>Student App</span>
          </Navbar.Brand>
          <Navbar.Toggle className='custom-toggler' aria-controls="basic-navbar" />
          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Navbar.Text className=''>
              <Link to={"/"} style={{ backgroundColor: "#04495c", color: "#fcf2f7" }} className='btn btn-light mb-1 mt-2  '>Add Student <i className="fa-solid fa-plus fa-sm"></i> </Link>
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
                <td colSpan="7" className="text-center">
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <span>Loading...</span>
                    <Spinner animation="grow" variant="light" size="sm"  />
                  </div>
                </td>
              </tr>

              {/* {
                loading
                  ?



                  :
                  error.length > 0
                    ?
                    <tr>
                      <td colSpan="7">
                        <h4>{error}</h4>
                      </td>
                    </tr>
                    :
                    students.map((student, index) => (
                      <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.batch}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                      </tr>
                    ))
              } */}
            </tbody>
          </Table>
        </div>

      </div>







    </>
  )
}

export default App
