import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Button } from 'reactstrap';

import { Severity } from '../../../Models/Enums/enums';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 0.3em;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'black' : '#282c34')};  
`;
const Row = styled.div``;
const Footer = styled.div``;
const Task = props => {
    let SeverityDisplayName = "";
    switch (props.task.Severity) {
        case Severity.LOW.value:
            SeverityDisplayName = Severity.LOW.displayName;
            break;
        case Severity.MEDIUM.value:
            SeverityDisplayName = Severity.MEDIUM.displayName;
            break;
        case Severity.HIGH.value:
            SeverityDisplayName = Severity.HIGH.displayName;
            break;
        default:
            SeverityDisplayName = Severity.UNKNOWN.displayName;
            break;
    }
    const onEditClick = () => {        
        props.f_setTicketIdToEdit(props.task.Id);        
    };
    return (
        <Draggable draggableId={props.task.Id} index={props.index}>
            {(provided, stapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={stapshot.isDragging}
                    title={`updated on ${props.task.DateUpdated.toLocaleString()}`}
                >
                    <Row>ID: {props.task.Id}</Row>
                    <Row>Summary: {props.task.Summary}</Row>
                    <Row>Severity: {SeverityDisplayName}</Row>
                    {/* <Row>{props.task.Description}</Row>
                    <Row>Created: {props.task.DateCreated.toLocaleString()}</Row>
                    <Row>Updated: {props.task.DateUpdated.toLocaleString()}</Row> */}
                    <Footer className="clearfix">
                        <Button 
                            className="float-right" 
                            color="primary" 
                            onClick={onEditClick}>Edit</Button>
                    </Footer>
                </Container>
            )}

        </Draggable>
    );
};

Task.propTypes = {
    task: PropTypes.object,
    index: PropTypes.number,
    f_setTicketIdToEdit: PropTypes.func.isRequired,
};

export default Task;