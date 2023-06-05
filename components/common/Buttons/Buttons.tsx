import { FC } from "react";

export interface IBaseButtonProps {
  btnText: string;
}

const Buttons: FC<IBaseButtonProps> = ({ btnText }) => {
  return <button className="p-4 bg-teal-500">{btnText}</button>;
};

export default Buttons;
