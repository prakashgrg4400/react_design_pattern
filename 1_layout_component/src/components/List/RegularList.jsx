/* eslint-disable react/prop-types */
export const RegularList = ({ items, sourceName, ItemComponent }) => {
    console.log(items);
    return (
        <>
            {items.map((item, i) => {
                return <ItemComponent key={i} {...{ [sourceName]: item }} />;
            })}
        </>
    );
};

// ==> In line 7 [sourceName] is used to provide dynamic key name. If you only use sourceName instead if [sourceName] , than by default the key will be "sourceName" . And we are storing it inside an object i.e.  { [sourceName]: item }  . And finally we are spreading this object having single key value pair as shown above.

// ==> This works for all the data, which are used for listing. We have created two types of Listing. They are "SmallAuthorsList" and "LargeAuthorsList" , and we can use those listing components throught this component, by passing those components as a props i.e. "ItemComponent" .
