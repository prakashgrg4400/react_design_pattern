/* eslint-disable react/prop-types */
export const SmallBooksList = ({ book }) => {
    const { name, price } = book;
    return (
        <>
            <h2>
                {name} / {price}
            </h2>
        </>
    );
};
