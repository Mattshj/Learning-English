import React from 'react'

import * as d from "../assets/data/fooddata"
import BaseGame from "../components/BaseGame";


class animalScreen extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
                <BaseGame data={d.fooddata}></BaseGame>
        )
    }
}

export default animalScreen
