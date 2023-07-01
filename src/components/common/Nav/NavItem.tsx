import Link from "next/link";

type INavItemProps = {
  link: string;
  text: string;
};

const NavItem = ({ link, text }: INavItemProps) => {
  return (
    <div className="link-item p-2 border-b-2 border-green-600 rounded-sm a hover:bg-cyan-400">
      <Link href={link}>{text}</Link>
    </div>
  );
};

export default NavItem;
