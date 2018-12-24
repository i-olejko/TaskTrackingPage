import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TicketModal from './TicketModal';
import toastr from 'toastr';

class ShowEditTicketModal extends Component {
    constructor(props) {
        super(props);
        const ticket = props.tickets.filter(t => t.Id === props.ticketId)[0];
        this.state = {
            showModal: ticket !== undefined,
            summary: ticket.Summary,
            description: ticket.Description,
            severity: ticket.Severity,
            status: ticket.Status,
        };
        this._closeModal = this._closeModal.bind(this);
        this._setSummary = this._setSummary.bind(this);
        this._setDescription = this._setDescription.bind(this);
        this._setSeverity = this._setSeverity.bind(this);
        this._setStatus = this._setStatus.bind(this);
        this._onTicketEdit = this._onTicketEdit.bind(this);
    }
    _closeModal() {
        this.props.f_setTicketIdToEdit(null);
    }
    _setSummary(value) {
        this.setState({ summary: value });
    }
    _setDescription(value) {
        this.setState({ description: value });
    }
    _setSeverity(value) {
        this.setState({ severity: value });
    }
    _setStatus(value) {
        this.setState({ status: value });
    }
    _onTicketEdit() {
        let isValid = true;

        if (isValid) {
            const newTicketsArr = this.props.tickets.map(t => {
                let retVal = Object.assign({},t);
                if(t.Id === this.props.ticketId){
                    debugger;
                    retVal.Summary = this.state.summary;
                    retVal.Description = this.state.description;
                    retVal.Severity = this.state.severity;
                    retVal.Status = this.state.status;
                    retVal.DateUpdated = new Date();
                }
                return retVal;
            });
            this.props.f_SaveTicketsArray(newTicketsArr);
            this.props.f_setTicketIdToEdit(null);
        } else {
            toastr.error("Fields can't be empty");
        }
    }
    render() {
        return (
            <div>
                <TicketModal
                    showModal={this.state.showModal}
                    summary={this.state.summary}
                    description={this.state.description}
                    severity={this.state.severity}
                    status={this.state.status}
                    modalTitle="Show/Edit Ticket"
                    actionButtonTxt="Edit"
                    f_toggle={this._closeModal}
                    f_setSummary={this._setSummary}
                    f_setDescription={this._setDescription}
                    f_onSeverityChange={this._setSeverity}
                    f_onStatusChange={this._setStatus}
                    f_onTicketAction={this._onTicketEdit} />
            </div>
        );
    }
}

ShowEditTicketModal.propTypes = {
    tickets: PropTypes.array,
    ticketId: PropTypes.number,
    f_setTicketIdToEdit: PropTypes.func.isRequired,
    f_SaveTicketsArray: PropTypes.func.isRequired,
};

export default ShowEditTicketModal;