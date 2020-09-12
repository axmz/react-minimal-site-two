import React, { useLayoutEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import Layout from '../../layout'
import routes from '../../routes.js'
import NotFound from '../../components/notfound/index'
import Berlin from './berlin'
import Malmo from './malmo'
import London from './london'

function choosePlace(cityName) {
    switch (cityName) {
        case "Berlin":
            return () => <Berlin />
        case "Malmö":
            return () => <Malmo />
        default:
            return () => <London />
    }
}

const Places = () => {
    const match = useRouteMatch()
    const history = useHistory()
    const [page, setPage] = useState('Loading...')

    useLayoutEffect(() => {
        if (match && routes.places.includes(match.params.city)) {
            setPage(choosePlace(match.params.city))
        } else if (match.path === '/places') {
            history.push("/places/" + routes.places[0])
            // setPage(choosePlace())
        } else {
            setPage(<NotFound />)
        }
    }, [history, match, setPage])

    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Places