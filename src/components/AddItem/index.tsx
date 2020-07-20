/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
import { Formik, Form, Field, FieldProps } from "formik";

import ModalWrapper from "components/ModalWrapper";
import Title from "components/Title";
import Icon from "components/Icon";
import useFormManagement from "hooks/useFormManagement";

import IconAdd from "media/icons/add.svg";
import {
    WrapperForm,
    Label,
    Input,
    Textarea,
    WrapperButtons,
    ErrorBlock,
    ButtonIcon,
    Button,
} from "./style";

interface Props {
    type: "post" | "comment";
    title: string;
}

const AddItem: React.FC<Props> = ({ type, title }) => {
    const [showModal, setShowModal] = useState(false);
    const [isPostModal] = useState(type === "post");

    const handleOnClick = useCallback(() => setShowModal((prev) => !prev), []);

    const handleClose = useCallback(() => setShowModal(false), []);

    const {
        initialValues,
        validationSchema,
        handleSubmit,
    } = useFormManagement(isPostModal, handleClose);

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
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        render={({ errors, touched }) => (
                            <Form>
                                {isPostModal ? (
                                    <Field
                                        name="title"
                                        render={({ field }: FieldProps) => (
                                            <Label>
                                                <Input
                                                    type="text"
                                                    {...field}
                                                    placeholder="Title"
                                                />
                                                {errors.title &&
                                                touched.title ? (
                                                    <ErrorBlock>
                                                        {errors.title}
                                                    </ErrorBlock>
                                                ) : null}
                                            </Label>
                                        )}
                                    />
                                ) : (
                                    <>
                                        <Field
                                            name="email"
                                            render={({ field }: FieldProps) => (
                                                <Label>
                                                    <Input
                                                        type="email"
                                                        {...field}
                                                        placeholder="Email"
                                                    />
                                                    {errors.email &&
                                                    touched.email ? (
                                                        <ErrorBlock>
                                                            {errors.email}
                                                        </ErrorBlock>
                                                    ) : null}
                                                </Label>
                                            )}
                                        />
                                        <Field
                                            name="name"
                                            render={({ field }: FieldProps) => (
                                                <Label>
                                                    <Input
                                                        type="text"
                                                        {...field}
                                                        placeholder="Name"
                                                    />
                                                    {errors.name &&
                                                    touched.name ? (
                                                        <ErrorBlock>
                                                            {errors.name}
                                                        </ErrorBlock>
                                                    ) : null}
                                                </Label>
                                            )}
                                        />
                                    </>
                                )}
                                <Field
                                    name="body"
                                    render={({ field }: FieldProps) => (
                                        <Label>
                                            <Textarea
                                                placeholder="Body"
                                                {...field}
                                            ></Textarea>
                                            {errors.body && touched.body ? (
                                                <ErrorBlock top="100%">
                                                    {errors.body}
                                                </ErrorBlock>
                                            ) : null}
                                        </Label>
                                    )}
                                />
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
                        )}
                    />
                </WrapperForm>
            </ModalWrapper>
        </>
    );
};

export default AddItem;
