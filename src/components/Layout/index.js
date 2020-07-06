import React from 'react';
import { Section, Container } from './style';

const Layout = ({children}) => (
    <Section>
        <Container>
            {children}
        </Container>
    </Section>
)

export default Layout;