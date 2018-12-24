import React from 'react';
import PropTypes from 'prop-types';

const TextBox = props => {
    const _onChange = (event) => {
        const value = event.target.value;
        props.f_onChange(value);
    };

    return (
        <div>
            <input
                type="text"
                className="form-control"
                placeholder={props.placeholder}
                value={props.value}
                onChange={_onChange} />
        </div>
    );
};

TextBox.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string
    ]),
    f_onChange: PropTypes.func.isRequired,
};
TextBox.defaultProps = {
    value: "",
    placeholder: ""
}
export default TextBox;