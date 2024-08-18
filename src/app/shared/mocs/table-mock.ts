import {TableStatus} from "../interfaces/table.interface";

export const TABLE_MOCK: TableStatus[]  = [
  {
    tableNumber: '1',
    state: false,
    mainUser: 'User 1',
    requestedUser: 'User 2',
    date: '',
  },
  {
    tableNumber: '2',
    state: true,
    mainUser: 'User 3',
    requestedUser: 'User 4',
    requestedUserState: 'ACCEPTED',
    date: '',
  },
  {
    tableNumber: '3',
    state: false,
    mainUser: 'User 5',
    requestedUser: 'User 6',
    date: '',
  },
  {
    tableNumber: '4',
    state: true,
    mainUser: 'User 7',
    requestedUser: 'User 8',
    requestedUserState: 'PENDING',
    date: '',
  },
  {
    tableNumber: '5',
    state: false,
    mainUser: 'User 9',
    requestedUser: 'User 10',
    date: '',
  },
  {
    tableNumber: '6',
    state: false,
    mainUser: 'User 11',
    requestedUser: 'User 12',
    date: '',
  },
  {
    tableNumber: '7',
    state: true,
    mainUser: 'User 13',
    requestedUser: 'User 14',
    requestedUserState: 'ACCEPTED',
    date: '',
  },
  {
    tableNumber: '8',
    state: true,
    mainUser: 'User 15',
    requestedUser: 'User 16',
    requestedUserState: 'PENDING',
    date: '',
  }

]
