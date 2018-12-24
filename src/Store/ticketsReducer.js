import * as constActions from '../Controllers/const';
import initialState from '../Controllers/InitialState';

import { Status, Severity } from '../Models/Enums/enums';

export default (state = initialState, action) => {
    switch (action.type) {
        case constActions.SET_TICKETS_ARRAY:
            return Object.assign({}, state, {
                globalTicketsData: [...action.ticketsArr]
            });
        case constActions.SET_NEW_TICKET_SUMMARY:
            return Object.assign({}, state, {
                newTicketSummary: action.value
            });
        case constActions.SET_NEW_TICKET_DESCRIPTION:
            return Object.assign({}, state, {
                newTicketDescription: action.value
            });
            case constActions.SET_NEW_TICKET_SEVERITY:
            return Object.assign({}, state, {
                newTicketSeverity: action.value
            });
            case constActions.SET_NEW_TICKET_STATUS:
            return Object.assign({}, state, {
                newTicketStatus: action.value
            });
            case constActions.CLEAR_NEW_TICKET_DATA:
            return Object.assign({}, state,{
                newTicketSummary: "",
                newTicketDescription: "",
                newTicketSeverity: Severity.LOW.value,
                newTicketStatus: Status.OPEN.value
            });
            case constActions.SET_FILTER_VALUE:
            return Object.assign({}, state, {
                ticketsFilter: action.value
            });
            case constActions.SET_TICKET_ID_TO_EDIT:
            return Object.assign({}, state, {
                ticketIdToEdit: action.value
            });
        default:
            return state;
    }
}