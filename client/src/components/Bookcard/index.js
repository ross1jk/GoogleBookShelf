import React from "react";
import { Row, Col } from "../Grid";

function BookCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <Row>
            <Col size="9">
              <h2>{props.title}</h2>
              <h3>{props.authors}</h3>
            </Col>
            <Col size="3">
              <div>
                <a href={props.link} type="button" className="btn btn-info">
                  View
                </a>
                <button type="button" className="btn btn-info" onClick={props.onClick}>
                  {props.action}
                </button>
              </div>
            </Col>
          </Row>
          <Row>
          <Col size="4">
          <img src={props.image} className="img-fluid" alt="bookimg" />
          </Col>
            <Col size="8">
            <p>{props.description}</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
