/* eslint-disable react/prop-types */
export const LargeAuthorsList = ({ author }) => {
    const { name, age, country, books } = author;
    return (
        <>
            <h2>{name}</h2>
            <h2>Age : {age}</h2>
            <h2>Country : {country}</h2>
            <h1>Books : - </h1>
            <ul>
                {books.map((book) => {
                    return <li key={book}>{book}</li>;
                })}
            </ul>
        </>
    );
};
