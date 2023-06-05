import { FC } from "react";

export interface IBaseButtonProps {
  btnText: string;
  backgroundColor: string;
}

const Buttons: FC<IBaseButtonProps> = ({ btnText, backgroundColor }) => {
  return (
    <button className="p-4 bg-teal-500" style={{ backgroundColor: `${backgroundColor}` }}>
      {btnText}
    </button>
  );
};

export default Buttons;
