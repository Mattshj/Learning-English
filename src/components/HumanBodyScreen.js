import React from 'react'
import {ScrollView, Image, Text, default as Alert} from 'react-native'

import * as d from "../assets/data/humanbodydata"
import Basegame from "./Basegame";


class animalScreen extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <ScrollView>

                <Basegame data={d.humanbodydata}></Basegame>
            </ScrollView>
        )
    }
}

export default animalScreen
