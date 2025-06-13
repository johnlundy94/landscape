import {FC, ReactNode } from "react";
import Slide, {SlideProps} from "@mui/material/Slide";
import "../styles/Portfolio.css";

interface SlideComponentProps {
  isActive: boolean;
  direction: SlideProps["direction"];
  children: ReactNode;
  className?: string;
}

const SlideComponent: FC<SlideComponentProps> = ({
  isActive,
  direction,
  children,
  className,
}) => (
    <Slide
      direction={direction}
      in={isActive}
      timeout={{ enter: 1000, exit: 1000 }}
    >
      <div className={className ?? "slider-content"}>{children}</div>
    </Slide>
  );

export default SlideComponent;
