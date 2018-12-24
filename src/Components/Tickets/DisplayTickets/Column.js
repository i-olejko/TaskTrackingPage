import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 33%;

    display: flex;
    flex-direction: column;

    
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    flex-grow: 1;
    min-height: 20em;
    overflow-y: auto;
`;

const Column = props => {
    return (
        <Container>
            <Title>{props.column.title}</Title>
            <Droppable droppableId={props.column.id}>
                {(provided) => (
                    <TaskList 
                    {...provided.droppableProps}
                    ref={provided.innerRef}>
                        {
                            props.tasks.map((task,idx) => (
                                <Task key={task.Id} 
                                    task={task} 
                                    index={idx}
                                    f_setTicketIdToEdit={props.f_setTicketIdToEdit} />
                            ))
                        }
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    );
};

Column.propTypes = {
    column: PropTypes.object.isRequired,
    tasks: PropTypes.array,
    f_setTicketIdToEdit: PropTypes.func.isRequired,
};

export default Column;