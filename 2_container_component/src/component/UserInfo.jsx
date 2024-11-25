/* eslint-disable react/prop-types */
export const UserInfo = ({ user }) => {
    console.log(user);
    const { name, age, country, books } = user || {};
    return user ? (
        <>
            <h2>{name}</h2>
            <p>age : {age}</p>
            <p>country : {country}</p>
            <h2>Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book}>{book}</li>
                ))}
            </ul>
        </>
    ) : (
        <h1>Loading...</h1>
    );
};
