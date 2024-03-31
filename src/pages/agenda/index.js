import React from 'react';
import Main from "../../components/Main.js";

const Agenda = () => {
  return (
    <Main>
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="max-w-2xl p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Ethan Ly&apos;s Birthday Party Plan</h1>
        <div className="bg-white shadow-md p-6 rounded-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Date and Time:</h2>
          <p><span className="font-semibold">Date:</span> April 5, 2024</p>
          <p><span className="font-semibold">Time:</span> 7:00 PM</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Event:</h2>
          <p><span className="font-semibold">Name:</span> Ethan Ly&apos;s Birthday Party</p>
          <p><span className="font-semibold">Location:</span> [Add Location]</p>
          <p><span className="font-semibold">Description:</span> [Add Description]</p>
        </div>
      </div>
    </div>
    </Main>
  );
};

export default Agenda;


