import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'components/Layout';
import { ROUTES } from 'config';

const PageNotFound = () => (
    <Layout>
        <h2>Page not found</h2>
        <Link to={ROUTES.ROOT}>back to homepage</Link>
    </Layout>
)

export default PageNotFound;