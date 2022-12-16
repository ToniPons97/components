import React from "react";
import { Hello } from "./components/hello";
import { Welcome } from "./components/welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Toni Pons</strong>} />
            </div>
        );
    }
}