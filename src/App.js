import React, {Component} from 'react';
import {connect} from "react-redux";

class App extends Component {
    addTrack() {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    render() {
        const playlist = this.props.tracks;
        return (
            <div>
                <input type="text" ref={(input) => this.trackInput = input}/>
                <button onClick={this.addTrack.bind(this)}>Add track</button>
                <ul>
                    {
                      playlist.map((track, i) => <li key={i}>{track}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        tracks: state.tracks
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        }
    })
)(App);