import React from 'react';
import { PropTypes } from "prop-types";

export default class scrollPosition extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            position: 0
        }
    }
    static propTypes = {
        children: PropTypes.func.isRequired
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = (event) => {
        const scrollY = event.path[1].scrollY;
        // console.log('event ', event);
        this.setState({
            position: scrollY
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.position)}
            </div>
        )
    }
}