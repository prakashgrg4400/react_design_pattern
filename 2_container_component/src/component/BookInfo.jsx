/* eslint-disable react/prop-types */
export const BookInfo = ({ books }) => {
    const { name, page, title, price } = books;
    return books ? (
        <>
            <h2>{name}</h2>
            <p>price : {price}</p>
            <p>page : {page}</p>
            <h2>Title : {title}</h2>
        </>
    ) : (
        <h1>.....Loading</h1>
    );
};
