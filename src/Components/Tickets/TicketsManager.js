import React, { Component } from 'react';
import PropTypes from 'prop-types';

//css
import styling from '../Styling/TicketsManager.module.css';

//components
import CreateTicket from './CreateTicket';
import DisplayTickets from './DisplayTickets/DisplayTickets';
import FilterTickets from './FilterTickets';
import ShowEditTicketModal from './ShowEditTicketModal';
import toastr from 'toastr';

//Models
import Ticket from '../../Models/ticket';
class TicketsManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isEditModalOpen: false,
        };
        this._toggleModal = this._toggleModal.bind(this);
        this._onCreateTicket = this._onCreateTicket.bind(this);
        this._filterTickets = this._filterTickets.bind(this);
    }
    _toggleModal() {
        this.props.f_clearNewTicketData();
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    _onCreateTicket() {
        const summary = this.props.newTicketSummary;
        const description = this.props.newTicketDescription;
        const severity = this.props.newTicketSeverity;
        const status = this.props.newTicketStatus;
        const newTicket = new Ticket(summary, description, status, severity);
        const isValidObj = newTicket.Validate();

        if (!isValidObj.isValid) {
            toastr.warning(isValidObj.msg, "Create new ticket");
        } else {
            //need to calculate new ID (usually server generate new ID)
            const IdsArr = this.props.tickets.map(el => el.Id);
            const MaxID = Math.max.apply(null, IdsArr);
            newTicket.Id = MaxID + 1;
            const newTicketsArr = [...this.props.tickets, newTicket];
            this.props.f_saveTicketsArr(newTicketsArr);
            this.setState({ isModalOpen: false });
        }
    }
    _filterTickets() {
        let retVal = [...this.props.tickets];
        if (this.props.filter !== "") {
            retVal = this.props.tickets.filter(ticket => {
                let isFiltered = false;
                if (ticket.Summary.includes(this.props.filter)) {
                    isFiltered = true;
                }

                if (ticket.Description.includes(this.props.filter)) {
                    isFiltered = true;
                }
                return isFiltered;
            });
        }
        return retVal;
    }
    render() {
        let filteredTickets = this._filterTickets();
        return (
            <div className={styling.wrapper}>
                <div className={styling.createSearchArea}>
                    <CreateTicket
                        showModal={this.state.isModalOpen}
                        summary={this.props.newTicketSummary}
                        description={this.props.newTicketDescription}
                        severity={this.props.newTicketSeverity}
                        status={this.props.newTicketStatus}
                        f_setSummary={this.props.f_saveNewTicketSummary}
                        f_setDescription={this.props.f_saveNewTicketDescription}
                        f_onSeverityChange={this.props.f_saveNewTicketSeverity}
                        f_onStatusChange={this.props.f_saveNewTicketStatus}
                        f_toggle={this._toggleModal}
                        f_onCreateTicket={this._onCreateTicket} />
                    <FilterTickets
                        filter={this.props.filter}
                        f_setFilter={this.props.f_setFilterValue} />
                </div>
                <div className={styling.displayTickets}>
                    <DisplayTickets
                        ticketsArr={filteredTickets}
                        f_SaveTicketsArray={this.props.f_saveTicketsArr}
                        f_setTicketIdToEdit={this.props.f_setTicketIdToEdit} />

                </div>
                <div>
                    {
                        this.props.ticketIdToEdit == null ? null :
                            <ShowEditTicketModal
                                tickets={this.props.tickets}
                                ticketId={this.props.ticketIdToEdit}
                                f_setTicketIdToEdit={this.props.f_setTicketIdToEdit} 
                                f_SaveTicketsArray={this.props.f_saveTicketsArr}/>
                    }

                </div>
            </div>
        );
    }
}

TicketsManager.propTypes = {
    tickets: PropTypes.array.isRequired,
    newTicketSummary: PropTypes.string.isRequired,
    newTicketDescription: PropTypes.string.isRequired,
    newTicketSeverity: PropTypes.number.isRequired,
    newTicketStatus: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    ticketIdToEdit: PropTypes.number,
    f_saveNewTicketSummary: PropTypes.func.isRequired,
    f_saveNewTicketDescription: PropTypes.func.isRequired,
    f_saveNewTicketSeverity: PropTypes.func.isRequired,
    f_saveNewTicketStatus: PropTypes.func.isRequired,
    f_saveTicketsArr: PropTypes.func.isRequired,
    f_clearNewTicketData: PropTypes.func.isRequired,
    f_setFilterValue: PropTypes.func.isRequired,
    f_setTicketIdToEdit: PropTypes.func.isRequired,
};

export default TicketsManager;