



import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

export default function Created({ email, fetchData }) {
  const [text, setText] = useState("");

  const[content, setcontent] = useState([])


  function handleChange(e) {
    setText(e.target.value);
  }

  async function addData() {

      // setcontent([...content, text])

     setText("")



    try {
      const response = await fetch('http://localhost:3000/api/users/adddata', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: text,
        })
      });

      const data = await response.json();
      console.log("Data added", data);

      fetchData()


    } catch (error) {
      console.log(error.message);
    }
  }


     





  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your message"
                onChange={handleChange}
               
                value={text}

              />
            </Form.Group>
            <Button variant="dark" onClick={addData}
                        style={{
                          width: '50px',      // Width of the button
                          height: '50px',     // Height of the button
                          borderRadius: '50%', // Makes the button circular
                          padding: '0',        // Ensures content is centered
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}       
                     >
                   
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>


            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}



















