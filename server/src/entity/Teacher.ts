import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Schedule } from "./Schedule";
import { Role } from "./Role";
import { Campus } from "./Campus";
import { Tracker } from "./Tracker";
import { Gradebook } from "./Gradebook";
import { Incident } from "./Incident";
import { StaffAttendance } from "./StaffAttendance";
import { SpedResponse } from "./SpedResponse";
import { TimeCard } from "./TimeCard";
import { RelatedService } from "./RelatedService";
import { SessionInfo } from "./SessionInfo";
import { TallyResponse } from "./TallyResponse";

@Entity()
export class Teacher extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		nullable: true
	})
	firstName: string;

	@Column({
		nullable: true
	})
	lastName: string;

	@Column({
		nullable: true
	})
	birthDate: string;

	@Column({
		nullable: true
	})
	image: string;

	@Column({
		nullable: true
	})
	email: string;

	@Column({
		nullable: true
	})
	link: string;

	@Column({
		nullable: true
	})
	phone: string;

	@Column({
		nullable: true
	})
	elementary: string;

	@Column({
		nullable: true
	})
	middle: string;

	@Column({
		nullable: true
	})
	math: string;

	@Column({
		nullable: true
	})
	ELA: string;

	@Column({
		nullable: true
	})
	history: string;

	@Column({
		nullable: true
	})
	science: string;

	@Column({
		nullable: true
	})
	elective: string;

	@Column({
		nullable: true
	})
	pOne: string;

	@Column({
		nullable: true
	})
	pTwo: string;

	@Column({
		nullable: true
	})
	pThree: string;

	@Column({
		nullable: true
	})
	pFour: string;

	@Column({
		nullable: true
	})
	pFive: string;

	@Column({
		nullable: true
	})
	pSix: string;

	@Column({
		nullable: true
	})
	pSeven: string;

	@Column({
		nullable: true
	})
	pEight: string;

	@Column({
		nullable: true
	})
	pNine: string;

	@Column({
		nullable: true
	})
	pTen: string;

	@OneToMany(() => Schedule, schedule => schedule.para)
	pschedule: Schedule[];

	@OneToMany(() => Schedule, schedule => schedule.teacher)
	schedules: Schedule[];

	@OneToMany(() => TimeCard, timecard => timecard.teacher)
	timecard: TimeCard[];

	@ManyToOne(() => Role, role => role.teachers)
	role: Role;

	@ManyToOne(() => Campus, campus => campus.teachers)
	campus: Campus;

	@OneToMany(() => StaffAttendance, staffAttendance => staffAttendance.teachers)
	staffAttendance: StaffAttendance[];

	@OneToMany(() => SpedResponse, spedResponse => spedResponse.teachers)
	spedResponse: SpedResponse[];

	@OneToMany(() => TallyResponse, tallyResponse => tallyResponse.teachers)
	tallyResponse: TallyResponse[];

	@OneToMany(() => Tracker, tracker => tracker.teachers)
	trackers: Tracker[];

	@OneToMany(() => Incident, incident => incident.teachers)
	incidents: Incident[];

	@OneToMany(() => Gradebook, gradebook => gradebook.teachers)
	gradebooks: Gradebook[];

	@OneToMany(() => RelatedService, relatedService => relatedService.teacher, {onDelete: 'CASCADE'})
	relatedService: RelatedService[];

	@OneToMany(() => SessionInfo, sessionInfo => sessionInfo.teacher, {onDelete: 'CASCADE'})
	sessionInfo: SessionInfo[];

	@Column({
		nullable: true
	})
	here: string;

	@Column({
		nullable: true,
		default: false
	})
	multicampus: boolean;
}
