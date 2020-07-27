import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakePpointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  // it('should not be able to create two appointments on the same time', () => {});
});
