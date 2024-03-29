import React, { Component } from "react";
import { connect } from 'react-redux';
import { baseURL } from "../baseURL";
import {
  Container,
  Label,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import TeacherSchedule from "./TeacherScheduleComponent";
import TeacherCreator from "./CreateTeacher";
import { TeacherUpdater } from "./UpdateTeacher";
import { fetcher } from "../services/fetcher";
import TeacherGroupSchedule from "./TeacherGroupScheduleComponent";
import { StaffAttendanceCreator } from "./CreateStaffAttendance";
import StaffAttendance from "./StaffAttendanceComponent";
import TeacherTrackerResponse from "./TeacherTrackerResponses";
import { TimeCardOverride } from "./OverrideTimeCardComponent";
import StaffID from "./StaffID";

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
    };
    this.state = { 
      teacher: null,
      timecard:[] };
  }


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  getStaffAttendance() {
    fetcher(`${baseURL}/staffAttendance`)
      // Convert response to a JSON object
      .then((response) => response.json())
      .then((attendances) => {
        attendances.sort(
          (attendancea, attendanceb) => attendancea?.date - attendanceb?.date
        );
        this.setState({
          staffAttendance: attendances,
        });
        console.log(this.state.staffAttendance);
      });
  }

  onChange = (e) => {
    const teacherId = Number(e.target.value);
    const teacher = this.props.teachers.find(
      (teacher) => teacher.id === teacherId
    );
    this.setState({ teacher });
    console.log(this.state);
    console.log(e.target.value);
    this.getTimes(teacherId)
  };

  getTimes(teacherId) {
    fetcher(`${baseURL}/ttimecards?teacherId=${teacherId}`)
    .then((response) => response.json())
    .then((timecards) => {
      timecards.sort(
        (attendancea, attendanceb) => attendancea?.date - attendanceb?.date
      );
      this.setState({
        timecard: timecards,
      });
      console.log(this.state.timecard)
      console.log(teacherId);
    });
  }

  getTimesCallback() {
    fetcher(`${baseURL}/ttimecards?teacherId=${this.state.teacher.id}`)
    .then((response) => response.json())
    .then((timecards) => {
      timecards.sort(
        (attendancea, attendanceb) => attendancea?.date - attendanceb?.date
      );
      this.setState({
        timecard: timecards,
      });
      console.log(this.state.timecard)
      console.log(this.state.teacher.id);
    });
  }

  // textSwitch(randomInt) {
  //   switch (randomInt) {
  //     case 0:
  //       return "start a rock band and tour Ohio";
  //     case 1:
  //       return "invent 38 new flavors of hashbrowns";
  //     case 2:
  //       return "run for president without disclosing their party affiliation";
  //     case 3:
  //       return "host a reality dating show featuring gorillas";
  //     case 4:
  //       return "discover a magical land accessible through a sock drawer";
  //     case 5:
  //       return "become a stunt double for a potato";
  //     case 6:
  //       return "decipher the secret language of marionettes";
  //     case 7:
  //       return "become a teaching ninja";
  //     case 8:
  //       return "become a teaching pirate";
  //     default:
  //       return "buy Dallas a Dr. Pepper";
  //   }
  // }

  // picSwitch(randomInt) {
  //   switch (randomInt) {
  //     case 0:
  //       return "https://qyctrtcwtwasdktftmuy.supabase.in/storage/v1/object/public/images/thewave.png";
  //     case 1:
  //       return "https://qyctrtcwtwasdktftmuy.supabase.in/storage/v1/object/public/images/spikeamerica.png";
  //     default:
  //       return "https://qyctrtcwtwasdktftmuy.supabase.in/storage/v1/object/public/images/spikehawk.png";
  //   }
  // }

  render() {
    // const getRandomInt = () => {
    //   return Math.floor(Math.random() * 3);
    // };
    const date = new Date();
    return (
      <Container className="border-primary rounded-lg">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              One to One
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Group
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Attendance
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              Tracking Entries
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              Timecard Override
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggle("6");
              }}
            >
              Staff ID
            </NavLink>
          </NavItem>
        </Nav>
        <Container className="border-primary bg-white">
        <TeacherCreator></TeacherCreator>
        <TeacherUpdater
          teacherId={this.state.teacher?.id}
          teacherFirstName={this.state.teacher?.firstName}
          teacherLastName={this.state.teacher?.lastName}
          teacherBirthDate={this.state.teacher?.birthDate}
          teacherRole={this.state.teacher?.role.id}
          teacherCampus={this.state.teacher?.campus.id}
          teacherEmail={this.state.teacher?.email}
          teacherPhone={this.state.teacher?.phone}
          teacherLink={this.state.teacher?.link}
          teacherElementary={this.state.teacher?.elementary}
          teacherMiddle={this.state.teacher?.middle}
          teacherHighschoolMath={this.state.teacher?.math}
          teacherHighschoolELA={this.state.teacher?.ELA}
          teacherHighschoolHistory={this.state.teacher?.history}
          teacherHighschoolScience={this.state.teacher?.science}
          teacherElective={this.state.teacher?.elective}
          teacherP1={this.state.teacher?.pOne}
          teacherP2={this.state.teacher?.pTwo}
          teacherP3={this.state.teacher?.pThree}
          teacherP4={this.state.teacher?.pFour}
          teacherP5={this.state.teacher?.pFive}
          teacherP6={this.state.teacher?.pSix}
          teacherP7={this.state.teacher?.pSeven}
          teacherP8={this.state.teacher?.pEight}
          teacherP9={this.state.teacher?.pNine}
          teacherP10={this.state.teacher?.pTen}
        ></TeacherUpdater>
        <div>
        <Row>
            <Col>
              <Row>
                <Container className="parent">
                  <img
                    className="image1"
                    style={{ width: 100, borderRadius: 60 / 2 }}
                    src={this.state.teacher?.image}
                    // src="https://qyctrtcwtwasdktftmuy.supabase.in/storage/v1/object/public/images/DallasLovell.jpg"
                  />
                  {/* <img
                    className="image2"
                    style={{ width: 100, borderRadius: 60 / 2 }}
                    src={this.picSwitch(getRandomInt())}
                  /> */}
                </Container>
              </Row>
            </Col>
            <Col xs="9" style={{ justifyContent: "left", bottom: 0 }}>
            </Col>
          </Row>
          Hello {this.state.teacher?.firstName}{" "}
        </div>
        <h3>Link: {this.state.teacher?.link}</h3>
        <div className="row">
          <Label for="scheduleTeacher">Select Teacher</Label>
          <select id="scheduleTeacher" onChange={this.onChange}>
            <option selected>None</option>
            {this.props.teachers
              .filter((teacher) => teacher.campus.id === this.props?.campus.id)
              .sort(function (a, b) {
                let x = a.firstName.toLowerCase();
                let y = b.firstName.toLowerCase();
                if (x < y) {
                  return -1;
                }
                if (x > y) {
                  return 1;
                }
                return 0;
              })
              .map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.firstName} {teacher.lastName}
                </option>
              ))}
          </select>
        </div>
        </Container>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {this.state.teacher && (
              <TeacherSchedule
                teacher={this.state.teacher}
                userEmail={this.props?.userEmail}
              ></TeacherSchedule>
            )}
          </TabPane>
          <TabPane tabId="2">
            {this.state.teacher && (
              <TeacherGroupSchedule
                teacher={this.state.teacher}
                userEmail={this.props?.userEmail}
              ></TeacherGroupSchedule>
            )}
          </TabPane>
          <TabPane tabId="3">
            <h3>Staff Attendance</h3>
            {this.state.teacher && (
              <StaffAttendanceCreator
                callback={() => this.getStaffAttendance()}
                teacher={this.state.teacher}
                campus={this.state.teacher.campus}
                userEmail={this.props?.userEmail}
              ></StaffAttendanceCreator>
            )}
            {this.state.teacher && (
              <StaffAttendance
                teacher={this.state.teacher}
                campus={this.state.teacher.campus}
                userEmail={this.props?.userEmail}
              ></StaffAttendance>
            )}
          </TabPane>
          <TabPane tabId="4">
            {this.state.teacher && (
              <TeacherTrackerResponse
                startDate="2021-08-04"
                endDate={`${date.getFullYear()}-${(
                  "0" +
                  (date.getMonth() + 1)
                ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`}
                teacher={this.state.teacher}
                userEmail={this.props?.userEmail}
              ></TeacherTrackerResponse>
            )}
          </TabPane>
          <TabPane tabId="5">
            {this.state.teacher && (
              this.state.timecard.map(times =>
                <TimeCardOverride
                callback={() => this.getTimesCallback()}
                timecardId={times.id}
                date={times.date}
                time={times.time}
                inOut={times.inOut}
                teacher={times.teacher}

              ></TimeCardOverride>
                )
            )}
          </TabPane>
          <TabPane tabId="6">
            <StaffID teacher={this.state.teacher}></StaffID>
          </TabPane>
        </TabContent>
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    teachers: state.teachers,
  }
}

export default connect(mapState, null)(Teacher);
