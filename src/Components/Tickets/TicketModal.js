import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import TextBox from '../FormComponents/TextBox';
import { Status, Severity } from '../../Models/Enums/enums';


const TicketModal = props => {
    const onSeverityChange = (e) => {
        let newSeverity = parseInt(e.target.value);
        if (!isNaN(newSeverity)) {
            props.f_onSeverityChange(newSeverity);
        }
    };
    const onStatusChange = (e) => {        
        let newStatus = parseInt(e.target.value);
        if (!isNaN(newStatus)) {
            props.f_onStatusChange(newStatus);
        }
    };
    return (
        <Modal isOpen={props.showModal} toggle={props.f_toggle} >
            <ModalHeader toggle={props.f_toggle}>{props.modalTitle}</ModalHeader>
            <ModalBody>
                <Row>
                    <Col>Summary:</Col>
                    <Col>
                        <TextBox value={props.summary} f_onChange={props.f_setSummary} />
                    </Col>
                </Row>
                <Row>
                    <Col>Description:</Col>
                    <Col>
                        <TextBox value={props.description} f_onChange={props.f_setDescription} />
                    </Col>
                </Row>
                <Row>
                    <Col>Severity:</Col>
                    <Col>
                        <select
                            className="form-control"
                            value={props.severity}
                            onChange={onSeverityChange}>
                            <option value={Severity.LOW.value}>{Severity.LOW.displayName}</option>
                            <option value={Severity.MEDIUM.value}>{Severity.MEDIUM.displayName}</option>
                            <option value={Severity.HIGH.value}>{Severity.HIGH.displayName}</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col>Status:</Col>
                    <Col>
                        <select className="form-control"
                            value={props.status}
                            onChange={onStatusChange}>
                            <option value={Status.OPEN.value}>{Status.OPEN.displayName}</option>
                            <option value={Status.IN_PROGRESS.value}>{Status.IN_PROGRESS.displayName}</option>
                            <option value={Status.DONE.value}>{Status.DONE.displayName}</option>
                        </select>
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={props.f_onTicketAction}>{props.actionButtonTxt}</Button>{' '}
                <Button color="secondary" onClick={props.f_toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

TicketModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    severity: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
    modalTitle: PropTypes.string.isRequired,
    actionButtonTxt: PropTypes.string.isRequired,
    f_toggle: PropTypes.func.isRequired,
    f_setSummary: PropTypes.func.isRequired,
    f_setDescription: PropTypes.func.isRequired,
    f_onSeverityChange: PropTypes.func.isRequired,
    f_onStatusChange: PropTypes.func.isRequired,
    f_onTicketAction: PropTypes.func.isRequired,
};

export default TicketModal;