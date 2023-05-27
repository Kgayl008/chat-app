import React from "react";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-primary-focus">
                <div className="flex-1">
                    <button className="btn btn-ghost normal-case text-xl text-white">
                        Chatterbox
                    </button>
                </div>
                <div className="flex-none gap-2">
                    <p className="text-white text-xl">Paul</p>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0}
                            className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="Users pic"/>
                            </div>
                        </label>
                        <ul tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
