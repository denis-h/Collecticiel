import data = require("../data/data.json");
import { Doctor } from "../classes/doctor";
import { Appointment } from "../classes/appointment";
import { Patient } from "../classes/patient";

export function getAllDoctors(): Doctor[] {
    let doctors = data.doctors;
    let docs: Doctor[] = [];

    doctors.forEach(doc => {
        let d = new Doctor();
        Object.assign(d, doc);
        docs.push(d);
    });

    return docs;
}

export function getAllPatients(): Patient[] {
    let patients = data.patients;
    let pts: Patient[] = [];

    patients.forEach(pat => {
        let p = new Patient();
        Object.assign(p, pat);
        pts.push(p);
    });

    return pts;
}

export function getAllAppointment(): Appointment[] {
    let appointments = data.appointments;
    let apps: Appointment[] = [];

    appointments.forEach(app => {
        let a = new Appointment();
        Object.assign(a, app);
        apps.push(a);
    });

    return apps;
}

export function getAppointmentByDoctorId(id: string): Appointment[] {
    return getAllAppointment().filter(a => a.getDoctorRef() === id);
}

export function loadDoctorAppointments(doctor: Doctor) {
    doctor.setAppoinments(getAppointmentByDoctorId(doctor.getId()));
}

export function getDoctorGlobalSchedule(doctor: Doctor): any[] {
    let result: any[] = [];

    doctor.getAppoinments().forEach(a => {
        result.push([a.getDate(), a.getTime()]);
    });

    return result;
}

export function formatDate() {
    let today = new Date();
    let day = today.getDate() > 9 ? today.getDate() : '0' + today.getDate();
    let month = today.getMonth() > 9 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1);
    return day + '/' + month + '/' + today.getFullYear();
}

export function getDoctorTodaySchedule(doctor: Doctor): any[] {
    let today = formatDate();
    let result: any[] = [];

    doctor.getAppoinments().forEach(a => {
        if (a.getDate() === today) {
            result.push([a.getDate(), a.getTime()]);
        }
    });

    return result;
}


export function flattenSchedule(schedule: any[]): any[] {
    let result: any[] = [];
    for (let i = 0; i < schedule.length; i++) {
        let time = schedule[i][1];
        result.concat(time);
    }

    // order result afterwards
    return result;
}