import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
} from "reactstrap";

var Barcode = require("react-barcode");

export default class StudentID extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: "white",
          backgroundImage:
            "url(https://qyctrtcwtwasdktftmuy.supabase.in/storage/v1/object/public/images/AspireOwlGraphic.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "inline-block",
          border: "2px solid black",
        }}
      >
        <Row>
          <Col
            style={{ justifyContent: "center" }}
            xs="4"
          >
            <Row>
              <img
                className="image1"
                style={{ width: 200, borderRadius: 60 / 2, margin: "5px" }}
                src={`https://qyctrtcwtwasdktftmuy.supabase.in/storage/v1/object/public/images/${this.props.student?.firstName}${this.props.student?.lastName}.jpg`}
              />
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <strong>
                {this.props.student?.firstName} {this.props.student?.lastName}
                <br/>
              AZ Aspire Academy</strong>
            </Row>
          </Col>
          <Col
            xs="5"
            style={{ position: "relative", justifyContent: "center" }}
          >
            <Row
              style={{
                left: "30%",
                top: "0",
                position: "absolute",
                justifyContent: "center"
              }}
            >
              <strong style={{justifyContent: "center"}}>{this.props.student?.campuses.name}</strong>
            </Row>
            <Row
              style={{
                left: "30%",
                bottom: "0",
                position: "absolute",
                justifyContent: "center"
              }}
            >
              <strong style={{justifyContent: "center"}}>2021-2022</strong>
            </Row>
          </Col>
          <Col
            xs="3"
            style={{ position: "relative", justifyContent: "center" }}
          >
            <strong style={{justifyContent: "center"}}>Student</strong>
            <Row
              style={{
                bottom: "0",
                position: "absolute",
              }}
            >
              <Barcode
                style={{ height: 50, width: 50 }}
                value={this.props.student?.id}
              />
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            fontFamily: "'Brush Script MT', cursive",
            fontSize: "200%",
            border: "2px solid black",
            backgroundColor: "gray",
            textShadow: "1px 1px white",
          }}
        >
          <p>Education on your terms</p>
        </Row>
      </Container>
    );
  }
}
