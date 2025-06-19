import type { ReactNode } from "react";

interface MainCardClass {
  title: string;
  children: ReactNode
  id?:string
}
const MainCard = ({ title, children, id }: MainCardClass) => {
  return (
    <div className="mb-10" id={id}>
        <h2 className="text-3xl font-medium">{title}</h2>
        <div className="mt-5">
            {children}
        </div>
    </div>
  );
};
export default MainCard;
