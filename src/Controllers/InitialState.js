import { Status, Severity } from '../Models/Enums/enums';


export default {
    newTicketSummary: "",
    newTicketDescription: "",
    newTicketSeverity: Severity.LOW.value,
    newTicketStatus: Status.OPEN.value,
    ticketsFilter: "",
    ticketIdToEdit: null,
    globalTicketsData: []
};