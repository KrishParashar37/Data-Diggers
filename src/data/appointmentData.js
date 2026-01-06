export let appointments = [];

export function addAppointment(app) {
  appointments.push(app);
}

export function markCompleted(childId) {
  appointments = appointments.map((a) =>
    a.childId === childId
      ? { ...a, status: "Completed" }
      : a
  );
}
