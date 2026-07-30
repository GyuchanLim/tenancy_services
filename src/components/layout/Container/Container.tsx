import { Box } from "@chakra-ui/react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  as?: "div" | "nav" | "footer";
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  as = "div",
  className = "",
}) => {
  return (
    <Box
      id="container"
      as={as}
      className={clsx("max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8", {
        "py-0 sm:py-0": as === "div",
        className
      })}
    >
      {children}
    </Box>
  );
};

export default Container;
