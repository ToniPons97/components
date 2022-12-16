import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
    static defaultProps = {
        name: 'User'
    }
    
    render() {

        return (
            <div>
                <p>Welcome, {this.props.name}!</p>
                {!!(this.props.age >= 18) && <Age age={this.props.age} />}
            </div>
        );
    }
}