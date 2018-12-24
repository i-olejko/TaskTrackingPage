import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import TicketModal from './TicketModal';
import styled from 'styled-components';

const Container = styled.div`
    margin-right: 2em;
`;

const CreateTicket = ({
    showModal,
    summary,
    description,
    severity,
    status,
    f_toggle,
    f_setSummary,
    f_setDescription,
    f_onSeverityChange,
    f_onStatusChange,
    f_onCreateTicket
}) => {
    
    return (
        <Container>
            <Button color="primary" onClick={f_toggle}>Create</Button>
            <TicketModal
                showModal={showModal} 
                summary={summary}
                description={description}
                severity={severity}
                status={status}
                modalTitle="Create New Ticket"
                actionButtonTxt="Create"
                f_toggle={f_toggle}
                f_setSummary={f_setSummary}
                f_setDescription={f_setDescription}
                f_onSeverityChange={f_onSeverityChange}
                f_onStatusChange={f_onStatusChange}
                f_onTicketAction={f_onCreateTicket}/>            
        </Container>
    );
};

CreateTicket.propTypes = {
    showModal: PropTypes.bool.isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    severity: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
    f_toggle: PropTypes.func.isRequired,
    f_setSummary: PropTypes.func.isRequired,
    f_setDescription: PropTypes.func.isRequired,
    f_onSeverityChange: PropTypes.func.isRequired,
    f_onStatusChange: PropTypes.func.isRequired,
    f_onCreateTicket: PropTypes.func.isRequired,
};

export default CreateTicket;