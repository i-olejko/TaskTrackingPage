import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import { Status } from '../../../Models/Enums/enums';

const Container = styled.div`
    height: 100%;
    flex-grow: 1;
    display: flex;
    
`;
const initialData = {
    columns: {
        'column-1': {
            id: 'column-1',
            title: Status.OPEN.displayName,
            status: Status.OPEN.value,
            ticketsIds: []
        },
        'column-2': {
            id: 'column-2',
            title: Status.IN_PROGRESS.displayName,
            status: Status.IN_PROGRESS.value,
            ticketsIds: []
        },
        'column-3': {
            id: 'column-3',
            title: Status.DONE.displayName,
            status: Status.DONE.value,
            ticketsIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
};

class DisplayTickets extends Component {
    constructor(props) {
        super(props);
        this.state = initialData;

        this._onDragEnd = this._onDragEnd.bind(this);
    }
    _onDragEnd(result) {
        const { destination, source, draggableId } = result;

        if (!destination) {
            //means dragged to unknown location
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            //means dragged to the save location
            return;
        }

        //const column = this.state.columns[source.droppableId];
        const startColumn = this.state.columns[source.droppableId];
        const finishColumn = this.state.columns[destination.droppableId];

        if (startColumn == finishColumn) {

            return;
        }

        //moving from one list to another
        const newTicketsArr = this.props.ticketsArr.map(t => {
            let retVal = { ...t };
            if (t.Id === draggableId) {
                debugger;
                retVal.Status = finishColumn.status;
                retVal.DateUpdated = new Date();
            }
            return retVal;
        });
        this.props.f_SaveTicketsArray(newTicketsArr);
    }
    render() {
        let tickets = [...this.props.ticketsArr];
        return (
            <DragDropContext onDragEnd={this._onDragEnd}>
                <Container>
                    {
                        this.state.columnOrder.map(columnId => {
                            const column = this.state.columns[columnId];
                            const filteredTickets = tickets.filter(t => t.Status === column.status);

                            return <Column
                                key={column.id}
                                column={column}
                                tasks={filteredTickets}
                                f_setTicketIdToEdit={this.props.f_setTicketIdToEdit} />;
                        })
                    }
                </Container>
            </DragDropContext>
        );
    }
}

DisplayTickets.propTypes = {
    ticketsArr: PropTypes.array.isRequired,
    f_SaveTicketsArray: PropTypes.func.isRequired,
    f_setTicketIdToEdit: PropTypes.func.isRequired,
};

export default DisplayTickets;