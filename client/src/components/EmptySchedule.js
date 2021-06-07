import { Component } from "react";
import {
  Button,
} from "reactstrap";
import { scheduleService } from "../services/scheduleService";

export class EmptyScheduleCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async emptySchedule(studentId) {
    for(let i=1; i < 11; i++) {
    const scheduleObject = {
      student: studentId,
      period:i, 
      teacher: 13, 
      course: 15, 
      campus: 6
    };
    console.log(studentId)
    
    const schedule = await scheduleService.create(scheduleObject);
    console.log(schedule)}
  }

  render() {
    return (
      <div>
        <Button outline color="primary" onClick={() => this.emptySchedule()}>
          Add Schedule
        </Button>
    </div>
    )}
}