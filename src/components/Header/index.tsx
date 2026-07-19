import { Box } from "@chakra-ui/react";

interface HeaderProps {
  pageName: string;
  title: string;
  description: string;
}

export const Header = ({pageName, title, description}: HeaderProps) => {
  return (
    <Box className="max-w-3xl space-y-4">
      <p className="text-sm font-mono font-semibold uppercase tracking-normal text-gray-500">
        {pageName}
      </p>
      <h1 className="text-4xl font-serif font-semibold text-gray-900">
        {title}
      </h1>
      <p className="text-lg font-mono text-gray-600">
        {description}
      </p>
    </Box>
  );
};
