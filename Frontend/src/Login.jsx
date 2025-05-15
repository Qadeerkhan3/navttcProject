import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(`Username: ${values.username}\nPassword: ${values.password}`);
    },
  });

  return (
    <div className="login-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="login-container">
            <h3 className="text-center text-gradient mb-4">Login</h3>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  isInvalid={formik.touched.username && formik.errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.username}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" className="w-100 login-btn">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
