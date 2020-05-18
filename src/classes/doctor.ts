import { Appointment } from "./appointment";

export class Doctor {
    private id: string;
    private name: string;
    private specialty: string;
    private appoinments: Appointment[];

    constructor() {
        this.id = "";
        this.name = "";
        this.specialty = "";
        this.appoinments = [];
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getSpecialty(): string {
        return this.specialty;
    }

    public getAppoinments(): Appointment[] {
        return this.appoinments;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setSpecialty(specialty: string): void {
        this.specialty = specialty;
    }

    public setAppoinments(appoinments: Appointment[]): void {
        this.appoinments = appoinments;
    }
}