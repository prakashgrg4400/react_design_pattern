/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #0000001e;
`;

const ModalContent = styled.div`
    margin: 12% auto;
    width: 50%;
    background-color: #efef5e46;
    padding: 1rem;
`;

//Here we are passing component inside children . This is a simple modal, we will create a proper modal later on.
//for modal, we need a bankgrond div, and div which stores content . And a state which changes dynamically to show and hide modal .
export const Modal = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Show Modal
            </button>
            {showModal && (
                <ModalBackground onClick={() => setShowModal(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        {children}
                        <button
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            Hide Modal
                        </button>
                    </ModalContent>
                </ModalBackground>
            )}
        </>
    );
};
