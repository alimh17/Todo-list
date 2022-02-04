import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiPlusCircle } from "react-icons/fi";
import { getNowDate } from "../utils/Date";

import "./navbar.css";

const Navbar = () => {
  const date = getNowDate();

  return (
    <nav className="nav-container">
      <Container dir="rtl" fluid>
        <Row>
          <Col>
            <div className="add-todo-container">
              <FiPlusCircle />
            </div>
          </Col>
          <Col>
            <div className="date-container">
              {date.map((item) => (
                <span className="mx-2">{item}</span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
