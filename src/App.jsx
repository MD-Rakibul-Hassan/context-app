import React from "react";
import TheemContext from "./Components/Context/Theem";
import Step_1 from "./Components/Step-1";
class App extends React.Component {
    state = {
        theem : "dark",
    }
    render () {

        return (
            <div>
                <h1>This is root of this app</h1>
                <TheemContext.Provider value={this.state}>
                    <Step_1 />
                </TheemContext.Provider>
            </div>
        )
    }
}
export default App;