import React,{ useState } from 'react';
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center px-4 py-2 bg-gray-800 border-t border-gray-600">
        <input
          type="text"
          placeholder="Type here"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className="flex-1 bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-3 p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300">
          <IoMdSend className="text-xl" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;
