import React from "react";
import DataFetch from "../(components)/dataFetch";
import Test from "../(components)/test";

async function fetch() {
  const data = await DataFetch();
  // console.log("data in fetch", data);
  return data;
}

export default async function about() {
  // const data = DataFetch();
  const data = await fetch();
  console.log("data in page", data[3]);

  return (
    <div>
      <p>about</p>
      {/* <DataFetch /> */}
      <Test />
    </div>
  );
}
