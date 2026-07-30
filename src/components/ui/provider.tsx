"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      primary: {
        display: "inline-flex",
        borderRadius: "sm",
        bg: "gray.900",
        px: "4",
        py: "2",
        fontFamily: "mono",
        fontWeight: "medium",
        color: "white",
        _hover: {
          bg: "gray.700",
        },
      },
      outline: {},
    },
  },
});

const config = defineConfig({
  preflight: false,
  globalCss: {},
  theme: {
    recipes: {
      button: buttonRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
