// import React from "react";

// const TeamCard = ({ name, role, linkedin }) => (
//   <div className="bg-woodsmoke rounded-xl shadow-lg p-5 flex flex-col items-center border-2 border-tango transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl w-full">
//     <h3 className="text-xl font-bold text-tango mb-1">{name}</h3>
//     <span className="text-apple font-semibold mb-2">{role}</span>
//     <a
//       href={linkedin}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="mt-2 text-matisse hover:text-tango transition-colors duration-200 underline"
//     >
//       LinkedIn
//     </a>
//   </div>
// );

// export default TeamCard;

import React from "react";

const TeamCard = ({ name, role, linkedin }) => (
  <div className="bg-[#fcf9f7] rounded-xl border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition-all duration-300">
    <h3 className="text-xl font-semibold text-tango mb-1">{name}</h3>
    <p className="text-apple text-sm mb-2 font-medium">{role}</p>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-matisse hover:text-tango underline text-sm transition-colors duration-200"
    >
      LinkedIn
    </a>
  </div>
);

export default TeamCard;
