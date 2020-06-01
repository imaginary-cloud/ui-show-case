import React from 'react';

import { Container } from './style';

function Button({ children }) {
    return (
        <Container>{children}</Container>
    )
}

export default Button;