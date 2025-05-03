import { toast } from 'react-toastify';

export const getAppointments = () => {
    const appointments = localStorage.getItem('appointments');
    if (appointments) return JSON.parse(appointments);
    return [];
};

export const addAppointment = (doctor) => {
    const appointments = getAppointments();
    const isExist = appointments.find(d => d.id === doctor.id);
    if (isExist) {
        toast.error("Appointment already scheduled for today");
        return false;
    }
    appointments.push(doctor);
    toast.success(`Appointment scheduled for ${doctor.name} successfully.`)
    localStorage.setItem('appointments', JSON.stringify(appointments));
    return true;
};


export const removeAppointment = id =>{
    const appointments = getAppointments();
    const remainingAppointments = appointments.filter(doctor => doctor.id !== id);
    toast.error("Appointment Cancelled.")
    localStorage.setItem('appointments', JSON.stringify(remainingAppointments));
}

export const dayName =()=>{
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const today = new Date();
    return days[today.getDay()];
}


