import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
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
    extra: [],
  });

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      let data = formFields.extra;
      data.push(e.target.value);
      setFormFields((prev) => {
        return {
          ...prev,
          extra: data,
        };
      });
    } else {
      const { name, value } = e.target;
      // console.log(name);
      // console.log(value);
      // console.log(e.target);
      setFormFields((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
    // console.log(formFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
    // setFormFields({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   password: "",
    //   gender: "",
    //   fileUpload: "",
    //   address: "",
    //   city: "",
    //   state: "",
    //   zipcode: "",
    //   extra: [],
    // });
  };
  return (
    <Container>
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
                name="gender"
                value="Male"
                id="formHorizontalRadios1"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="Female"
                id="formHorizontalRadios2"
                onChange={handleChange}
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
            <Form.Select
              defaultValue="Choose state"
              name="state"
              onChange={handleChange}
            >
              <option value="">Choose state</option>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Bangalaore">Bangalore</option>
              <option value="Madurai">Madurai</option>
              <option value="Salem">Salem</option>
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
            label="Uniform"
            name="extra"
            value="Uniform"
            onChange={handleChange}
          />
          <Form.Check
            type="checkbox"
            label="Hostel"
            name="extra"
            value="Hostel"
            onChange={handleChange}
          />
          <Form.Check
            type="checkbox"
            label="Bus"
            name="extra"
            value="Bus"
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
    </Container>
  );
};

export default Forms;
