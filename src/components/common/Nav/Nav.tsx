import ThemeSwitch from "components/common/ThemeSwitch/ThemeSwitch";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="nav w-full p-2 flex justify-between items-center">
      <div className="w-full flex justify-start px-6 py-4 items-center gap-2 border-b-2">
        <div className="link-item p-2 border rounded-sm border-cyan-700">
          <Link href="/">Home</Link>
        </div>
        <div className="link-item p-2 border border-cyan-700 rounded-sm active:border-red-800">
          <Link href="/scroll-section">Scroll Section</Link>
        </div>
      </div>
      <ThemeSwitch />
    </div>
  );
};

export default Nav;
