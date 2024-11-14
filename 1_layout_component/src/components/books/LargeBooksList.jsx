/* eslint-disable react/prop-types */
export const LargeBooksList = ({ book }) => {
    console.log(book);
    const { name, title, price, pages } = book;
    return (
        <>
            <h2>{name}</h2>
            <p>title : {title} </p>
            <p>price : {price}</p>
            <p>pages : {pages}</p>
        </>
    );
};
