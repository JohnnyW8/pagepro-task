import React from "react";
import CloseIcon from "media/icons/close.svg";
import {
    StyledModal,
    Box,
    BoxWrapper,
    BoxClose,
    BoxCloseImg,
    BoxItems,
} from "./style";

const ModalWrapper = ({ show, children, close }) => {
    const closeIfClickedOut = (e) => {
        if (e.currentTarget === e.target) {
            const target = e.target;
            window.addEventListener(
                "mouseup",
                (event) => {
                    if (event.target === target) close();
                },
                { once: true }
            );
        }
    };

    return (
        <StyledModal show={show ? 1 : 0} onMouseDown={closeIfClickedOut}>
            <Box>
                <BoxWrapper>
                    <BoxClose onClick={close}>
                        <BoxCloseImg src={CloseIcon} />
                    </BoxClose>
                    <BoxItems>{children}</BoxItems>
                </BoxWrapper>
            </Box>
        </StyledModal>
    );
};

export default ModalWrapper;
