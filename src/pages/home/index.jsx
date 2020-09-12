import React, { useLayoutEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import Layout from '../../layout'
import routes from '../../routes.js'
import NotFound from '../../components/notfound/index'
import About from './about'
import Contacts from './contacts'
import Credits from './credits'
import HomePage from './home'

function choosePage(page) {
    switch (page) {
        // case "about":
        //     return () => <About />
        // case "contacts":
        //     return () => <Contacts />
        case "credits":
            return () => <Credits />
        default:
            return () => <HomePage />
    }
}

const Home = () => {
    const match = useRouteMatch()
    const [page, setPage] = useState('Loading...')

    useLayoutEffect(() => {
        if (match && routes.home.includes(match.params.page)) {
            setPage(choosePage(match.params.page))
        } else if (match.path === '/') {
            setPage(choosePage())
        } else {
            setPage(<NotFound />)
        }
    }, [match, setPage])

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Home