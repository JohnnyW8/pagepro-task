/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Form, Input } from "react-free-forms";

import { addPost } from "store/actions/user";
import { addComment } from "store/actions/post";

import ModalWrapper from "components/ModalWrapper";
import Title from "components/Title";
import Icon from "components/Icon";
import IconAdd from "media/icons/add.svg";
import {
    WrapperForm,
    WrapperTextarea,
    WrapperButtons,
    ButtonIcon,
    Button,
} from "./style";


export default function ({ type, title }) {
    const dispatch = useDispatch();
    const { id: userId, postId } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [isPostModal] = useState(type === "post");

    const handleOnClick = useCallback(() => setShowModal((prev) => !prev), []);

    const handleClose = useCallback(() => setShowModal(false), []);

    const handleSumbit = useCallback(async (data) => {
        const action = isPostModal
            ? addPost({ ...data, userId })
            : addComment({ ...data, postId });

        await dispatch(action);
        handleClose();
    }, []);

    return (
        <>
            {isPostModal ? (
                <ButtonIcon onClick={handleOnClick}>
                    <Icon src={IconAdd} />
                </ButtonIcon>
            ) : (
                <Button color="dark" onClick={handleOnClick}>
                    {title}
                </Button>
            )}
            <ModalWrapper show={showModal} close={handleClose}>
                <WrapperForm>
                    <Title title={title} />
                    <Form
                        onSubmit={(data) => handleSumbit(data)}
                        requiredErrorText="Field is required"
                        recaptchaInfoRef=""
                    >
                        {isPostModal ? (
                            <Input
                                required={true}
                                name="title"
                                type="text"
                                rule="text"
                                placeholder="Title"
                            />
                        ) : (
                            <>
                                <Input
                                    required={true}
                                    name="email"
                                    type="email"
                                    rule="email"
                                    placeholder="Email"
                                />
                                <Input
                                    required={true}
                                    name="name"
                                    type="text"
                                    rule="text"
                                    placeholder="Name"
                                />
                            </>
                        )}
                        <Input required={true} name="body">
                            <WrapperTextarea>
                                <textarea placeholder="Body"></textarea>
                            </WrapperTextarea>
                        </Input>
                        <WrapperButtons>
                            <Button
                                type="button"
                                color="dark"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button type="submit">Save</Button>
                        </WrapperButtons>
                    </Form>
                </WrapperForm>
            </ModalWrapper>
        </>
    );
}
