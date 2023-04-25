import React from "react";

export default function Card(props) {
  //   console.log(props.name);
  return (
    <>
      <div className="px-6 py-12 bg-gray-900 rounded-3xl">
        <div className="text-2xl font-bold text-white">{props.name}</div>
        <p className="pt-4 text-white">{props.content}</p>
      </div>
    </>
  );
}
