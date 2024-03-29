import React, { Component } from "react";
import DisplayContainer from "./DisplayContainer";
import ButtonContainer from "./ButtonContainer";
import {
  Button, Col, Row,
} from "reactstrap";
import { tallyResponseService } from "../services/tallyResponseService";
import StopWatch from "./StopWatch/StopWatch";
import Display from "./Display";

export class TallyComponent extends Component {
  constructor() {
    super();

    this.state = {
      title: this.props?.tallyQuestionsQuestion,
      data: [
        { id: 1, title: "IN", color: "green" },
        { id: 2, title: "OUT", color: "gray" },
        { id: 3, title: "TOTAL", color: "red" },
      ],
      countIn: 0,
      countOut: 0,
      countTotal: 0,
      date: new Date()
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    console.log("Increment Elements");

    this.setState((prevState) => ({
      countIn: prevState.countIn + 1,
      countTotal: prevState.countTotal + 1,
    }));
  }

  decrement() {
    console.log("Decrement Elements");
    if (this.state.countIn != 0) {
      this.setState((prevState) => ({
        countOut: prevState.countOut + 1,
        countTotal: prevState.countTotal - 1,
      }));
    } else {
      console.log("In is Empty");
    }
  }

  reset() {
    console.log("Reset Elements");
    this.setState((state) => ({
      countIn: 0,
      countOut: 0,
      countTotal: 0,
    }));
    console.log(`${StopWatch.time}`)
  }

  async createTallyResponse(i) {
    var date = new Date();
    const tallyResponseObject = {
      teachers: this.props.teacher.id,
      tdate:
        date.getFullYear().toString() +
        "-" +
        (date.getMonth() + 1).toString().padStart(2, 0) +
        "-" +
        date.getDate().toString().padStart(2, 0),
      question: this.props.tallyQuestionsQuestion,
      point: this.state.countTotal,
      in: this.state.countIn,
      out: this.state.countOut,
      students: this.props.student.id,
      tallyQuestions: this.props.tallyQuestionsId,
    };
    const tallyResponse = await tallyResponseService.create(
      tallyResponseObject
    );
    console.log(tallyResponse);
  }
// hi
  render() {
    return (
      <div className="container" style={{ padding: 16 }}>
        <div className="navbar navbar-dark bg-dark">
          <h2 style={{ color: "white" }}>
            {this.props?.tallyQuestionsQuestion}
          </h2>
        </div>
        <DisplayContainer
          data={this.state.data}
          countIn={this.state.countIn}
          countOut={this.state.countOut}
          countTotal={this.state.countTotal}
        />
        <div>
          <ButtonContainer
            increment={this.increment}
            decrement={this.decrement}
            reset={this.reset}
          />
          <Row>
            <Col>
          <StopWatch />
            </Col>
            <Col>
          <Button
            color="primary"
            onClick={() => {
              this.createTallyResponse();
              this.reset();
            }}
          >
            Submit
          </Button>
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}
