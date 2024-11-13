/* eslint-disable react/prop-types */
export const SmallAuthorsList = ({ author }) => {
    const { name, age } = author;

    return (
        <p>
            {" "}
            Name : {name} , Age : {age}{" "}
        </p>
    );
};
