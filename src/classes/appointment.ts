export class Appointment {
    private id: string;
    private date: string;
    private time: string;
    private procedure: string;
    private doctorRef: string;
    private patientRef: string;

    constructor() {
        this.id = "";
        this.date = "";
        this.time = "";
        this.procedure = "";
        this.doctorRef = "";
        this.patientRef = "";
    }
    
    public getId(): string {
        return this.id;
    }

    public getDate(): string {
        return this.date;
    }

    public getTime(): string {
        return this.time;
    }

    public getProcedure(): string {
        return this.procedure;
    }

    public getDoctorRef(): string {
        return this.doctorRef;
    }

    public getPatientRef(): string {
        return this.patientRef;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setDate(date: string): void {
        this.date = date;
    }

    public setTime(time: string): void {
        this.time = time;
    }

    public setProcedure(procedure: string): void {
        this.procedure = procedure;
    }

    public setDoctorRef(doctorRef: string): void {
        this.doctorRef = doctorRef;
    }

    public setPatientRef(patientRef: string): void {
        this.patientRef = patientRef;
    }
}