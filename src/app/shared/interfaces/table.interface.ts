export interface Tables {
  tableNumber: string
  state: boolean;
  time_from?: string;
  time_to?: string;
  duration?: string;
  date?: string;
}

export interface TableStatus extends Tables {
  mainUser: string;
  requestedUser: string;
  requestedUserState?: 'ACCEPTED' | 'PENDING' | 'DECLINE';
}
