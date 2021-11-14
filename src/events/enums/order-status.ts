export enum OrderStatus {
  // When the order has been placed, but
  // the ticket it is trying to order has not been reserved
  Created = 'created',

  // The ticket the order is trying to reserve has already
  // been reserved, or user has cancelled the order, or
  // the order expires before payment
  Cancelled = 'cancelled',

  // The order has successfully reserved the ticket and is awaiting payment
  AwaitingPayment = 'awaiting:payment',

  // The order has successfully reserved the ticket and user has successfully
  // completed the payment
  Complete = 'complete',
}
