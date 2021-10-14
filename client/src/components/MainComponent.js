import React, { Component } from "react";
import Student from "./StudentComponent";
import AdminStudent from "./AdminStudentComponent";
import Sub from "./SubComponent";
import Home from "./HomeComponent";
import { Switch, Redirect } from "react-router-dom";
import Teacher from "./TeacherComponent";
import AdminTeacher from "./AdminTeacherComponent";
import SingleTeacher from "./SingleTeacherComponent";
import Schedule from "./ScheduleComponent";
import AdminSchedule from "./AdminScheduleComponent";
import { PrivateRoute } from "./PrivateRoute";
import Sped from "./SpedComponent";
import Transcript from "./TranscriptComponent";
import Calendar from "./CalendarComponent";
import { teacherService } from "../services/teacherService";
import Announcement from "./AnnouncementComponent";
import Resource from "./ResourceComponent";
import { TimeCard } from "./TimeCardComponent";
import Billing from "./BillingComponent";
import { ProviderTimeCardViewer } from "./ProviderTimeCardViewer";
import { AdminProviderTimeCardViewer } from "./AdminProviderTimeCardViewer";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      teachers: [],
      teacher: null,
      campus: null,
      userEmail: null,
    };
  }

  async componentDidMount() {
    const teachers = await teacherService.all();
    console.log(teachers);
    const teacher = teachers.find(
      (teacher) => teacher.email === this.props.userEmail
    );
    console.log(teacher);

    this.setState({
      teachers: teachers,
      teacher: teacher,
      campus: teacher.campus,
    });
    console.log(this.state.teachers);
  }

  render() {
    if (
      this.state.teacher?.role.id === 3 ||
      this.state.teacher?.role.id === 4
    ) {
      return (
        <div>
          <Switch>
            <PrivateRoute
              path="/singleteachers"
              component={SingleTeacher}
              userEmail={this.props?.userEmail}
            />
            <PrivateRoute
              path="/calendar"
              component={Calendar}
              userEmail={this.props?.userEmail}
            />
            <PrivateRoute
              path="/substitute"
              component={Sub}
              userEmail={this.props?.userEmail}
              campus={this.state.campus}
              teacher={this.state.teacher}
            />
            <PrivateRoute
              path="/resources"
              component={Resource}
              userEmail={this.props?.userEmail}
            />
            <PrivateRoute path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        </div>
      );
    } else if (this.state.teacher?.role.id === 8) {
      return (
        <PrivateRoute
          path="/providerTimeCardViewer"
          component={ProviderTimeCardViewer}
          userEmail={this.props?.userEmail}
          teacher={this.state.teacher}
        />
      );
    } else if (this.state.teacher?.role.id === 12) {
      return (
        <PrivateRoute
          path="/adminProviderTimeCardViewer"
          component={AdminProviderTimeCardViewer}
          userEmail={this.props?.userEmail}
          teacher={this.state.teacher}
        />
      );
    } else if (
      this.state.teacher?.role.id === 1 ||
      this.state.teacher?.role.id === 2 ||
      this.state.teacher?.role.id === 11
    ) {
      return (
        <div>
          <Switch>
            <PrivateRoute
              path="/sped"
              component={Sped}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/schedules"
              component={Schedule}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/teachers"
              component={Teacher}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/students"
              component={Student}
              campus={this.state.campus}
              teacher={this.state.teacher}
            />
            <PrivateRoute
              path="/transcripts"
              component={Transcript}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/announcements"
              component={Announcement}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/substitute"
              component={Sub}
              userEmail={this.props?.userEmail}
              campus={this.state.campus}
              teacher={this.state.teacher}
            />
            <PrivateRoute
              path="/calendar"
              component={Calendar}
              userEmail={this.props?.userEmail}
            />
            <PrivateRoute
              path="/resources"
              component={Resource}
              userEmail={this.props?.userEmail}
            />
            <PrivateRoute
              path="/timeCard"
              component={TimeCard}
              userEmail={this.props?.userEmail}
              campus={this.state.campus}
            />
            <PrivateRoute path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        </div>
      );
    } else if (
      this.state.teacher?.role.id === 5 ||
      this.state.teacher?.role.id === 7
    ) {
      return (
        <div>
          <Switch>
            <PrivateRoute
              path="/sped"
              component={Sped}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/schedules"
              component={Schedule}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/adminSchedules"
              component={AdminSchedule}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/adminTeachers"
              component={AdminTeacher}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/adminStudents"
              component={AdminStudent}
              campus={this.state.campus}
              teacher={this.state.teacher}
            />
            <PrivateRoute
              path="/transcripts"
              component={Transcript}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/announcements"
              component={Announcement}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/substitute"
              component={Sub}
              userEmail={this.props?.userEmail}
              campus={this.state.campus}
              teacher={this.state.teacher}
            />
            <PrivateRoute
              path="/calendar"
              component={Calendar}
              userEmail={this.props?.userEmail}
            />
            <PrivateRoute
              path="/resources"
              component={Resource}
              userEmail={this.props?.userEmail}
            />
            <PrivateRoute
              path="/timeCard"
              component={TimeCard}
              userEmail={this.props?.userEmail}
              campus={this.state.campus}
            />
            <PrivateRoute path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        </div>
      );
    } else {
      return (
        <div>
          <Switch>
            <PrivateRoute
              path="/sped"
              component={Sped}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/schedules"
              component={Schedule}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/adminSchedules"
              component={AdminSchedule}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/teachers"
              component={Teacher}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/adminTeachers"
              component={AdminTeacher}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/students"
              component={Student}
              campus={this.state.campus}
              teacher={this.state.teacher}
            />
            <PrivateRoute
              path="/adminStudents"
              component={AdminStudent}
              campus={this.state.campus}
              teacher={this.state.teacher}
            />
            <PrivateRoute
              path="/transcripts"
              component={Transcript}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/announcements"
              component={Announcement}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/substitute"
              component={Sub}
              userEmail={this.props?.userEmail}
              campus={this.state.campus}
              teacher={this.state.teacher}
            />
            <PrivateRoute
              path="/calendar"
              component={Calendar}
              userEmail={this.props?.userEmail}
            />
            <PrivateRoute
              path="/resources"
              component={Resource}
              userEmail={this.props?.userEmail}
            />
            <PrivateRoute
              path="/timeCard"
              component={TimeCard}
              userEmail={this.props?.userEmail}
              campus={this.state.campus}
            />
            <PrivateRoute
              path="/billing"
              component={Billing}
              userEmail={this.props?.userEmail}
            />
            <PrivateRoute path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        </div>
      );
    }
  }
}

export default Main;
