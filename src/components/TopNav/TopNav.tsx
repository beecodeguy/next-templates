import ThemeSwitch from "components/common/ThemeSwitch/ThemeSwitch";
import { HiOutlineBellAlert } from "react-icons/hi2";

const TopNav = () => {
  return (
    <div className="top-nav-container flex justify-end items-center px-8 py-6">
      <div className="nav-icons-container flex gap-4 items-center justify-start">
        <ThemeSwitch />
        <span className="icon-container-24 flex flex-col items-center justify-center min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]">
          <HiOutlineBellAlert />
        </span>
      </div>
    </div>
  );
};

export default TopNav;
