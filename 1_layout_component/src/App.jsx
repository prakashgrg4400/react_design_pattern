import "./App.css";
import { SplitScreen } from "./components/SplitScreen";

const LeftComponent = () => {
    return (
        <h1 style={{ backgroundColor: "red", color: "#fff", padding: "1rem" }}>
            Left Side Component
        </h1>
    );
};

const RightComponent = () => {
    return (
        <h1
            style={{
                backgroundColor: "black",
                color: "white",
                padding: "1rem",
            }}
        >
            Right Side Component
        </h1>
    );
};

// Splitscreen is a "layout component" , which focus on organizing other components within a web page . It is accepting two components, as a props, and we are using those props(components) inside splitscreen to fit it in a reusable design layout. This type of component is flexible, reusable and easy to update, without affecting other components.
function App() {
    return <SplitScreen Left={LeftComponent} Right={RightComponent} />;
}

export default App;

//========================== layout components=======================
// --> Those components which is used for organizing other components witin a page are known as layout components. Some of the layout components are "split screen" , "lists" , "modals" .  Above code is the example of "split screen" layout component
