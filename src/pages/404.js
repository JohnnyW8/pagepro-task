import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "config";

const PageNotFound = () => (
    <>
        <h2>Page not found</h2>
        <Link to={ROUTES.ROOT}>back to homepage</Link>
    </>
);

export default PageNotFound;
