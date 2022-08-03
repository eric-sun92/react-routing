import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export function Book() {
  const obj = useOutletContext();
  const { id } = useParams();
  return (
    <h1>
      Book {id}{" "}
      {
        // @ts-ignore
        obj.hello
      }
    </h1>
  );
}
