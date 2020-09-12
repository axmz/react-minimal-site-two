import React from 'react'
import Nav from '../components/nav';
import Page from '../components/page';

const Layout = ({ children }) => {

    return (
        <>
            <Page>
                {children}
            </Page>
            <Nav />
        </>
    )
}

export default Layout