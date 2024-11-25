import "./App.css";
import { UserDataLoader } from "./component/UserDataLoader";
import { UserInfo } from "./component/UserInfo";
// import { BookInfo } from "./component/BookInfo";

function App() {
    return (
        <>
            <UserDataLoader>
                <UserInfo />
                {/* <BookInfo /> */}
            </UserDataLoader>
        </>
    );
}

export default App;
