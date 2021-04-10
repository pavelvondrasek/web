import { FC } from "react";
import { x } from "@xstyled/emotion";

const Card: FC = ({ children }) => {
  return (
    <x.div p="md" boxShadow="0 12px 24px 0 rgba(23,23,23,0.19);">
      {children}
    </x.div>
  );
}

export default Card;
