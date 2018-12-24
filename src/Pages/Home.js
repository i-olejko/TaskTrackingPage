import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../Controllers/Actions/ticketActions'

//components
import TicketsManager from '../Components/Tickets/TicketsManager.js';
class Home extends Component {

    componentDidMount() {
        this.props.actions.getTicketsData();
    }
    render() {
        return (
            <div>
                <TicketsManager
                    tickets={this.props.tickets} 
                    newTicketSummary={this.props.newTicketSummary}
                    newTicketDescription={this.props.newTicketDescription}
                    newTicketSeverity = {this.props.newTicketSeverity}
                    newTicketStatus = {this.props.newTicketStatus}
                    filter = {this.props.filter}
                    ticketIdToEdit={this.props.ticketIdToEdit}
                    f_saveNewTicketSummary={this.props.actions.saveNewTicketSummary}
                    f_saveNewTicketDescription={this.props.actions.saveNewTicketDescription}
                    f_saveNewTicketSeverity={this.props.actions.saveNewTicketSeverity}
                    f_saveNewTicketStatus={this.props.actions.saveNewTicketStatus}
                    f_saveTicketsArr={this.props.actions.setTicketsData}
                    f_clearNewTicketData={this.props.actions.clearNewTicketData}
                    f_setFilterValue={this.props.actions.saveFilterValue}
                    f_setTicketIdToEdit={this.props.actions.saveTicketIdToEdit}/>
            </div>
        );
    }
}

Home.propTypes = {
    tickets: PropTypes.array.isRequired,
    newTicketSummary: PropTypes.string.isRequired,
    newTicketDescription: PropTypes.string.isRequired,
    newTicketSeverity: PropTypes.number.isRequired,
    newTicketStatus: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
};
function mapStateToProps(state, ownProps) {
    return {
        tickets: state.tickets.globalTicketsData,
        newTicketSummary: state.tickets.newTicketSummary,
        newTicketDescription: state.tickets.newTicketDescription,
        newTicketSeverity: state.tickets.newTicketSeverity,
        newTicketStatus: state.tickets.newTicketStatus,
        filter: state.tickets.ticketsFilter,
        ticketIdToEdit: state.tickets.ticketIdToEdit,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);