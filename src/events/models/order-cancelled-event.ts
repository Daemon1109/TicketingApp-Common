import { Subjects } from '../enums/subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    tickets: {
      id: string;
    };
  };
}
