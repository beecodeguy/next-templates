import { ReactNode } from "react";
import { AiOutlineHome } from "react-icons/ai";

const SidebarIcon = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="sidebar-icon-container flex gap-2 justify-center items-center min-w-full">
    <span className="icon-container-24">{icon}</span>
    <span className="side-link-text">{text}</span>
  </div>
);

const Sidebar = () => {
  return (
    <div className="sidebar-container flex fixed bg-slate-600 min-w">
      <div className="relative h-screen left-0 top-0 w-16 px-2 flex flex-col items-start">
        <SidebarIcon icon={<AiOutlineHome />} text="Home" />
      </div>
    </div>
  );
};

export default Sidebar;
