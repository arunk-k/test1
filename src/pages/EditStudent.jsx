import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function EditStudent() {
    return (
        <>
            <div style={{ background:"linear-gradient(to right,#106c85, #033543)"}} className="vh-100 d-flex justify-content-center align-items-center" >
                <div className="p-5 rounded border shadow" style={{ background:"linear-gradient(to right,rgb(21, 113, 138), #033543)", minWidth: "300px", width: "100%", maxWidth: "500px" }}>

                    <h3 className='ps-4 pt-4 text-light' >Edit Student</h3>

                    <FloatingLabel controlId="floatingName" label="Enter Your Name" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control type="text" placeholder="name" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingBatch" label="Enter Your Batch" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control type="text" placeholder="batch" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingAge" label="Enter Your Age" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control type="number" placeholder="age" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingAddress" label="Enter Your Address" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control as="textarea" placeholder="address" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingEmail" label="Enter Your Email" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control type="email" placeholder="email" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPhone" label="Enter Your Phone Number" className="ms-4 mt-4 me-4 text-secondary">
                        <Form.Control type="text" placeholder="phone" />
                    </FloatingLabel>

                    <div className='d-flex justify-content-center gap-3 mt-4'>
                    <button style={{ backgroundColor: "#01607a" }} className="btn  text-light mb-4 ">Edit Student</button>
                    <button style={{ backgroundColor: "#455659"}} className="btn  text-light mb-4 px-4">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditStudent
