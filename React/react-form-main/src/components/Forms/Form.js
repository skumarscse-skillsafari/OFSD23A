import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FileBase64 from "react-file-base64";

const Forms = () => {
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    fileUpload: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    checkIn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    // console.log(formFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center">Form Validation</h1>
      <Row className="mb-3">
        <Col>
          <Form.Control
            placeholder="First name"
            name="firstName"
            value={formFields.firstName}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Last name"
            name="lastName"
            value={formFields.lastName}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formFields.password}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="others"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload File (CV)</Form.Label>
        <FileBase64
          type="file"
          name="fileUpload"
          value={formFields.fileUpload}
          onDone={({ base64 }) =>
            setFormFields((prevVal) => {
              return { ...prevVal, fileUpload: base64 };
            })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="1234 Main St"
          name="address"
          value={formFields.address}
          onChange={handleChange}
        />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            value={formFields.city}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            name="zipcode"
            value={formFields.zipcode}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="Check me out"
          name="checkIn"
          value={formFields.checkIn}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <hr />
      <p>
        <img src={formFields.fileUpload} />
      </p>
    </Form>
  );
};

export default Forms;
