import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const customTheme = extendTheme(
  {
    colors: {
      brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
      },
    },
    fonts: {
      heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    },
    components: {
      Input: {
        defaultProps: {
          focusBorderColor: "yellow.500",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "red" })
);
