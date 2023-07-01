import NavItem from "components/common/Nav/NavItem";
import ThemeSwitch from "components/common/ThemeSwitch/ThemeSwitch";
import { NAV_ITEMS } from "utils/config";

const Nav = () => {
  return (
    <div className="nav w-full px-4 py-2 flex justify-between items-center">
      <div className="w-full flex justify-start px-2 py-3 items-center gap-2 border-b-2">
        {NAV_ITEMS.map(navItem => (
          <NavItem {...navItem} key={navItem.link} />
        ))}
      </div>
      <ThemeSwitch />
    </div>
  );
};

export default Nav;
