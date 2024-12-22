
import React, { useState, useEffect } from "react";

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
   
      <div className="w-[624px] h-auto bg-white border-4 shadow-lg rounded-lg flex flex-wrap items-center p-6">
    
        <div className="flex w-full h-[300px]   items-center justify-center   bg-gray-50 border-4 border-black p-2 rounded-lg">
          <img
            src={user.picture.large}
            alt="User"
            className="w-[200px]  object-cover rounded-md"
          />
          <div className="flex flex-col px-10 py-2">
          <h2 className="text-lg  mb-2">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600 capitalize mb-2">Gender: {user.gender}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default UserCard;