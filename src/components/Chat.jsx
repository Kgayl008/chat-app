import React from "react";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
    return (
        <div className="w-full bg-base-100 relative">
            <div className="navbar bg-primary chat">
                <p className="text-white text-xl">Amy</p>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div>
              <Messages/>
              <Input/>
            </div>
        </div>
    );
};

export default Chat;
