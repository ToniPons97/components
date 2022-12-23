import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
    static defaultProps = {
        name: 'User'
    }
    
    render() {

        return (
            <div className="welcome">
                <p>Welcome, {this.props.name}!</p>
                {this.props.name === 'John' && <Age age={this.props.age} />}
            </div>
        );
    }
}