import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

import { CSSTransition } from "react-transition-group";


function ModalComponent(props) {
    const [modal, setModal ] = useState(true);

    const toggle = () => {
        console.log(props);
        setModal(!modal);
        props.deactivate();
        props.history.push(props.endPath);
    }

        return (

            <CSSTransition
        in={true}
        appear={true}
        timeout={5000}
        classNames="fade"
        unmountOnExit
      >

        <div>
            <Modal isOpen={modal} toggle={toggle} className='primary'>
            <ModalHeader id="login-modal" className="styled-header" toggle={toggle}>{props.title}</ModalHeader>
            <ModalBody>
                {props.message}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={() => toggle()}>OK</Button>
            </ModalFooter>
            </Modal>
        </div>

        </CSSTransition>

        );
    
}

export default ModalComponent;