import {getAllDoctors, loadDoctorAppointments, getDoctorGlobalSchedule, getDoctorTodaySchedule, flattenSchedule } from "./src/utilities/utilities";

let doctors = getAllDoctors();
doctors.map(d => loadDoctorAppointments(d));

console.log('doctors : ', doctors);
console.log();
console.log();
console.log('----------------------------');
console.log();
console.log();

console.log('schedule for', doctors[1].getName(), ':', getDoctorGlobalSchedule(doctors[1]));
console.log();
console.log();
console.log('----------------------------');
console.log();
console.log();

console.log('today\'s schedule : ', getDoctorTodaySchedule(doctors[1]));
console.log();
console.log();
console.log('----------------------------');
console.log();
console.log();


console.log('final today\'s schedule : ', flattenSchedule(getDoctorTodaySchedule(doctors[1])));
