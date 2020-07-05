import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Col from "../components/Col";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";

function EmployeeDirectory(props) {
    return (
      <Router>
<div>   
    <Hero backgroundImage="https://images.squarespace-cdn.com/content/v1/556ea5c8e4b081da85e406c7/1509577883908-TEUQVWA2Y2HA7C50A5EB/ke17ZwdGBToddI8pDm48kNIz01GxeNglza_traDdevsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKck_3oyjxD2E6g656zntaR4vQBwPCV_Yc9BnFEdXAQ6xzMr4wPFfphDwEQcs_2fgoE/Toggl_Blog+Illustrations_MarkConlan25?format=2500w">
        <h1>Employee Directory</h1>
        <h3>Click on carrots to filter by heading or use the search box to narrow your results</h3>
    </Hero>
</div>

<Container style={{ marginTop: 30 }}>
<Row>
<div>
     <Col size="md-12">
        <h1>Image</h1>
    </Col>
</div>

<div>
    <Col size="md-12">
        <h1>Name</h1>
    </Col>
 </div>
 
 <div>
    <Col size="md-12">
        <h1>Phone</h1>
    </Col>
 </div>

<div>
    <Col size="md-12">
        <h1>Email</h1>
    </Col>
 </div>

 <div>
    <Col size="md-12">
        <h1>DOB</h1>
    </Col>
 </div>
</Row>

</Container>
        </Router>
    );
}


export default EmployeeDirectory;
