import { Box } from "@chakra-ui/react";

export type FeatureItem = {
  title: string;
  description: string;
};

export type FeatureItemsProps = {
  features: FeatureItem[];
};

const FeatureBoxes = ({ features }: FeatureItemsProps, className?: string) => {
  return (
    <Box className={`grid gap-4 md:grid-cols-3 ${className ?? ""}`}>
      {features.map((feature) => (
        <Box
          as="article"
          key={feature.title}
          className="rounded-sm border border-gray-200 p-5"
        >
          <h2 className="text-lg font-serif font-semibold text-gray-900">
            {feature.title}
          </h2>
          <p className="mt-2 text-sm font-mono leading-6 text-gray-600">
            {feature.description}
          </p>
        </Box>
      ))}
    </Box>
  )
};

export default FeatureBoxes;
