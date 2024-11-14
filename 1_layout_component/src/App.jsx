/* eslint-disable react/prop-types */
import "./App.css";
import { RegularList } from "./components/List/RegularList";
import { SplitScreen } from "./components/SplitScreen";
import { authors } from "./data/author";
import { SmallAuthorsList } from "./components/authors/SmallAuthorsList";
import { LargeAuthorsList } from "./components/authors/LargeAuthorsList";
import { books } from "./data/book";
import { SmallBooksList } from "./components/books/SmallBooksList";
import { LargeBooksList } from "./components/books/LargeBooksList";
import { NumberedList } from "./components/List/NumberedList";

const LeftComponent = ({ title }) => {
    return (
        <h1 style={{ backgroundColor: "red", color: "#fff", padding: "1rem" }}>
            {/* Left Side Component */}
            {title}
        </h1>
    );
};

const RightComponent = ({ title }) => {
    return (
        <h1
            style={{
                backgroundColor: "black",
                color: "white",
                padding: "1rem",
            }}
        >
            {/* Right Side Component */}
            {title}
        </h1>
    );
};

// Splitscreen is a "layout component" , which focus on organizing other components within a web page . It is accepting two components, as a props, and we are using those props(components) inside splitscreen to fit it in a reusable design layout. This type of component is flexible, reusable and easy to update, without affecting other components.
function App() {
    // return <SplitScreen Left={LeftComponent} Right={RightComponent} />;
    // !======================= better way of sending components ======================
    // this way of sending component inside "layout component" is better as we can easily pass the props if we need to , to the children components.
    // return (
    //     <SplitScreen leftHandWidth={1} rightHandWidth={3}>
    //         <LeftComponent title={"Left side"} />
    //         <RightComponent title={"Right Side"} />
    //     </SplitScreen>
    // );

    //!============================ List layout component below ================================
    //!==> So this is how we create and use a reusable , List layout component  to organize other components .
    //===================== for author ==========================
    // return (
    //     <>
    //         <RegularList
    //             items={authors}
    //             sourceName={"author"}
    //             ItemComponent={SmallAuthorsList}
    //         />
    //         <RegularList
    //             items={authors}
    //             sourceName={"author"}
    //             ItemComponent={LargeAuthorsList}
    //         />
    //     </>
    // );

    // =========================== for books ===========================
    return (
        <>
            <RegularList
                items={books}
                sourceName={"book"}
                ItemComponent={SmallBooksList}
            />
            {/* <RegularList
                items={books}
                sourceName={"book"}
                ItemComponent={LargeBooksList}
            /> */}
            <NumberedList
                items={books}
                sourceName={"book"}
                ItemComponent={LargeBooksList}
            />
        </>
    );
}

export default App;

//========================== layout components=======================
// --> Those components which is used for organizing other components witin a page are known as layout components. Some of the layout components are "split screen" , "lists" , "modals" .  Above code is the example of "split screen" layout component
