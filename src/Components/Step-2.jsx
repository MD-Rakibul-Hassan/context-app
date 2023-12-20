import Step_3 from "./Step-3";
import TheemContext from './Context/Theem';

function Step_2 () {
    return (
        <div style={{backgroundColor: "green",padding: "15px"}}>
            <h1>This is step 2</h1>
            <TheemContext.Consumer >
                {
                    ({theem}) => <Step_3  theem = {theem}/>
                }
            </TheemContext.Consumer>
        </div>
    )
}
export default Step_2;