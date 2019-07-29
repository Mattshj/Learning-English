import React, {Component} from 'react';
import { ImageBackground} from 'react-native';
import WallPaperStyle from "../styles/WallPaperStyle"

export default class Wallpaper extends Component {
    render() {
        return (
            <ImageBackground style={WallPaperStyle.picture} source={this.props.source}>
                {this.props.children}
            </ImageBackground>
        );
    }
}


