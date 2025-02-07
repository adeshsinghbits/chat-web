import { IoSettings } from "react-icons/io5";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa6";
import  { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/authSlice";

import { Link } from "react-router-dom";
import ProfileDashboard from "./ProfileDashboard";

function Profile() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlelogout = () => {
        dispatch(logoutUser());
        alert("Logout Successfully");
        navigate("/login");
        window.location.reload();
    };

    return (
        <div className="flex  pt-20">
            <div  className=" fixed  border-r border-base-300">
                <div className="flex flex-col h-screen  px-4 space-y-4 w-60">
                    <Link>
                        <FaUser size={25} className="inline-block mr-2"/> Account
                    </Link>
                    <Link>
                        <FaCommentDots size={25} className="inline-block mr-2"/> Complaints
                    </Link>
                    <Link>
                        <MdSupportAgent size={25} className="inline-block mr-2"/> Supports
                    </Link>
                    <div className="fixed bottom-0 pb-4 flex flex-col">
                        <Link to="/settings">
                            <IoSettings size={25} className="inline-block mr-2"/> Settings
                        </Link>
                        <button className="mt-4 cursor-pointer" onClick={handlelogout} >
                            <RiLogoutCircleRFill size={25} className="inline-block mr-2"/> Logout
                        </button>
                    </div>
                </div>
            </div>
            <ProfileDashboard />
        </div>
    )
}

export default Profile;
