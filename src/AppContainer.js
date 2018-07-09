import React from "react";
import {connect} from "react-redux";
import App from "./App";
import {fetchCharacters} from "./action";


class AppContainer extends React.Component {

    state = {
        characters: null
    };

    componentDidMount () {
        this.props.dispatch(fetchCharacters());
    }

    componentWillReceiveProps (nextProps) {
        if (this.props !== nextProps) {
            this.setState({characters: nextProps.characters});
        }
    }

    render () {
        if (!this.state.characters) return null;
        return <App characters={this.state.characters} />;
    }
}

const mapStateToProps = (store) => {
    return {
        characters: store.characters
    };
};

export default connect(mapStateToProps)(AppContainer);