/* eslint-disable react/prop-types */
export const NumberedList = ({ items, sourceName, ItemComponent }) => {
    return (
        <>
            {items.map((item, i) => {
                return (
                    <div key={i}>
                        <h3>{i + 1}</h3>
                        <ItemComponent {...{ [sourceName]: item }} />
                    </div>
                );
            })}
        </>
    );
};

//!===> This is numbered list, it is similar to regular list, only the difference is that it shows the list in numbers, you can create many variants like this
