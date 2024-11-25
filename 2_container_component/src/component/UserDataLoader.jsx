/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export const UserDataLoader = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                "http://localhost:9090/current-user"
            );
            console.log(response);
            setUser(response.data);
        })();
    }, []);

    return (
        <>
            {Array.isArray(children)
                ? React.Children.map(children, (child) => {
                      if (React.isValidElement(child)) {
                          return React.cloneElement(child, { user });
                      }
                      return child;
                  })
                : React.isValidElement(children) &&
                  React.cloneElement(children, { user })}
        </>
    );
};
