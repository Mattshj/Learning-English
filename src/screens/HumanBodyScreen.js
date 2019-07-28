import React from 'react'
import {ScrollView, Image, Text, default as Alert} from 'react-native'

import * as d from "../assets/data/humanbodydata"
import BaseGame from "../components/BaseGame";


class animalScreen extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
                <BaseGame data={d.humanbodydata}></BaseGame>
        )
    }
}

export default animalScreen
