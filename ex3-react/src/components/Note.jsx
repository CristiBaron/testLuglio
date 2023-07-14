import React from 'react'

const Note = ({ day, note }) => {
    return (
      <div className="bg-gray-200 p-4 m-2 rounded">
        <div className="text-lg font-bold mb-2">{day}</div>
        <div className="text-gray-700">{note}</div>
      </div>
    );
  };
  

export default Note