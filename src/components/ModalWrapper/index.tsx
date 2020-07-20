import React, { MouseEvent } from "react";
import CloseIcon from "media/icons/close.svg";
import {
    StyledModal,
    Box,
    BoxWrapper,
    BoxClose,
    BoxCloseImg,
    BoxItems,
} from "./style";

interface Props {
    show: boolean;
    close(): void
}

const ModalWrapper: React.FC<Props> = ({ show, children, close }) => {
    const closeIfClickedOut = (e: MouseEvent<HTMLDivElement>) => {
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
        <StyledModal show={show} onMouseDown={closeIfClickedOut}>
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
