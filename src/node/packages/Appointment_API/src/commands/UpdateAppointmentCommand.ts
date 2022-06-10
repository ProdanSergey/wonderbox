import { Store } from "../ports/store";
import { Appointment, AppointmentId } from "../domain/appointment";
import { NotFoundError } from "../domain/error";

export type UpdateAppointmentCommandParams = {
  id: AppointmentId;
  completed: boolean;
};

export class UpdateAppointmentCommand {
  constructor(private readonly store: Store) {}

  execute({ id, completed }: UpdateAppointmentCommandParams): Appointment {
    const appointment = this.store.get(id);

    if (!appointment) {
      throw new NotFoundError();
    }

    appointment.update({ completed });

    return appointment;
  }
}
