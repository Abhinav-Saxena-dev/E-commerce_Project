import React from 'react';
import Directory from '../../Components/directory/directory.component';

import { HomepageContainer } from './Homepage.style';
// import './Homepage.component.style.scss';

const HomePage = () => {
    return (
        <HomepageContainer>
            <Directory />
        </HomepageContainer>
    );
}

export default HomePage;