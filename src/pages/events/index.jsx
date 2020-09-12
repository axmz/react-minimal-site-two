import React, { useLayoutEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import Layout from '../../layout'
import routes from '../../routes.js'
import NotFound from '../../components/notfound/index'
import Music from './music'
import Nightlife from './nightlife'
import Art from './art'

function chooseEvent(cityName) {
    switch (cityName) {
        case "music":
            return () => <Music />
        case "nightlife":
            return () => <Nightlife />
        default:
            return () => <Art />
    }
}

const Events = () => {
    const match = useRouteMatch()
    const history = useHistory()
    const [page, setPage] = useState('Loading...')

    // useEffect(() => {
    useLayoutEffect(() => {
        if (match && routes.events.includes(match.params.type)) {
            setPage(chooseEvent(match.params.type))
        } else if (match.path === '/events') {
            history.push("/events/" + routes.events[0])
            // setPage(chooseEvent())
        } else {
            setPage(<NotFound />)
        }
    }, [match, setPage, history])

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Events