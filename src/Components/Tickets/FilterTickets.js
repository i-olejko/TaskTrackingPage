import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextBox from '../FormComponents/TextBox';

const Container = styled.div`
    flex-grow: 1;        
`;
const FilterTickets = props => {
    return (
        <Container>
            <TextBox 
                value={props.filter} 
                placeholder="filter by summary or description"
                f_onChange={props.f_setFilter} />
        </Container>
    );
};

FilterTickets.propTypes = {
    filter: PropTypes.string.isRequired,
    f_setFilter: PropTypes.func.isRequired,
};

export default FilterTickets;