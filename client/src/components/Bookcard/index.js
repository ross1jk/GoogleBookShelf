import React from "react";
import { Row, Col } from "../Grid";

function BookCard(props) {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <Row>
                        <Col size="9">
                            <h2>Title</h2>
                            <h3>Authors</h3>
                        </Col>
                        <Col size="3">
                            <button type="button" class="btn btn-info">View</button>
                            <button type="button" class="btn btn-info">{props.action}</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="3">
                            <img src="" className="img-fluid" alt="bookimg" />
                        </Col>
                        <Col size="9">
                            <p>Summary</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default BookCard;