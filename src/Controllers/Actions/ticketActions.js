import * as constActions from '../const';
import Api from '../../Api/api';

export function setTicketsArr(ticketsArr){
    return {type: constActions.SET_TICKETS_ARRAY, ticketsArr}
}
export function setNewTicketSummary(value){
    return {type: constActions.SET_NEW_TICKET_SUMMARY, value}
}
export function setNewTicketDescription(value){
    return {type: constActions.SET_NEW_TICKET_DESCRIPTION, value}
}
export function setNewTicketSeverity(value){
    return {type: constActions.SET_NEW_TICKET_SEVERITY, value}
}
export function setNewTicketStatus(value){
    return {type: constActions.SET_NEW_TICKET_STATUS, value}
}
export function clearNewTicketData(){
    return {type: constActions.CLEAR_NEW_TICKET_DATA}
}
export function setFilterValue(value){
    return {type: constActions.SET_FILTER_VALUE, value}
}
export function setTicketIdToEdit(value){
    return {type: constActions.SET_TICKET_ID_TO_EDIT, value}
}
export function getTicketsData(){
    return async (dispatch) => {
        const result = await Api.GetAllTickets();
        return dispatch(setTicketsArr(result));
    };
}
export function setTicketsData(ticketsArr){
    return (dispatch) => {
        dispatch(clearNewTicketData());
        dispatch(setTicketsArr(ticketsArr));
    };
}
export function saveNewTicketSummary(value){
    return (dispatch) => dispatch(setNewTicketSummary(value));
}

export function saveNewTicketDescription(value){
    return (dispatch) => dispatch(setNewTicketDescription(value));
}

export function saveNewTicketSeverity(value){
    return (dispatch) => dispatch(setNewTicketSeverity(value));
}

export function saveNewTicketStatus(value){
    return (dispatch) => dispatch(setNewTicketStatus(value));
}

export function saveFilterValue(value){
    return (dispatch) => dispatch(setFilterValue(value));
}
export function saveTicketIdToEdit(value){
    return (dispatch) => dispatch(setTicketIdToEdit(value));
}