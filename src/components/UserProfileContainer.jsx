import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FaCrown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { useNavigate } from "react-router-dom";

const UserProfileContainer = () => {
  const user = useSelector((state) => state.user);

  const firebaseAuth = getAuth(app);

  const navigate = useNavigate();

  const [isMenu, setIsMenu] = useState(false);

  const userLogout = () => {
    firebaseAuth.signOut().then(() => {
      navigate("/login", { replace: true });
    });
  };

  return (
    <div
      onMouseEnter={() => setIsMenu(true)}
      className="flex items-center justify-center gap-4 px-8 py-6 cursor-pointer relative "
    >
      <motion.div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shadow-md flex items-center justify-center">
        <motion.img
          whileHover={{ scale: 1.15 }}
          src={user?.picture}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl text-textdarkcolor font-semibold capitalize"
      >
        {user?.name.length > 15 ? `${user?.name.slice(0, 15)}...` : user?.name}
        <span className="block">
          <span className=" text-[12px] text-gray-500 flex items-center gap-1">
            Premium Member <FaCrown className="text-base text-yellow-400" />
          </span>
        </span>
      </motion.p>

      {isMenu && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseLeave={() => setIsMenu(false)}
          className="p-4 rounded-md bg-lightOverlay shadow-md absolute right-8 top-20 flex items-start justify-center flex-col gap-3"
        >
          <p className="text-base text-textcolor px-4 py-2 hover:bg-gray-300 w-full rounded-md hover:shadow-md">
            My Profile
          </p>
          <p className="text-base text-textcolor px-4 py-2 hover:bg-gray-300 w-full rounded-md hover:shadow-md">
            My Songs
          </p>
          <p className="text-base text-textcolor px-4 py-2 hover:bg-gray-300 w-full rounded-md hover:shadow-md">
            My Favourites
          </p>
          <motion.div
            whileTap={{ scale: 0.85 }}
            onClick={userLogout}
            className="w-full px-4 py-2 bg-gray-300 hover:shadow-md flex items-center justify-center gap-1 rounded-md"
          >
            <MdLogout className="text-xl text-textcolor" />
            <p className="text-xl text-textcolor">Signout</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default UserProfileContainer;
