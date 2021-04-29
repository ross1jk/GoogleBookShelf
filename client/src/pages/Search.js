import React from "react";
import { Row, Col } from "../components/Grid";
import BookCard from "../components/Bookcard";
import Searchform from "../components/Searchform";

function Search() {
  return (
    <div>
    <Row>
    <Col size="12">
     <Searchform />
     </Col>
    </Row>
    <Row>
    <Col size="12">
    <BookCard 
      action={"Save"}
    />
    </Col>
    </Row>
    
  </div>
  );
}

export default Search;