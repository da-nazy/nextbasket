import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";
import { appColors } from "../util";

declare module "@mui/material/styles" {
  interface Theme {
    initialColorMode: string;
    colors: {
        primary?: string;
      secondary?: string;
      text_color?: string;
      second_text_color?: string;
      light_text_color?: string;
      primary_text_color?: string;
      danger_color?: string;
      secondary_color1?: string;
      success_text_color?: string;
      success_color?: string;
      alert_color?: string;
      overlaycolor?: string;
      dark_background_color?: string;
      secondary_star?: string;
	  muted_color?:string;
    white?:string;
    light_gray?:string;
    light_gray2?:string;
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    initialColorMode?: string;
    colors: {
      primary?: string;
      secondary?: string;
      text_color?: string;
      second_text_color?: string;
      light_text_color?: string;
      primary_text_color?: string;
      danger_color?: string;
      secondary_color1?: string;
      success_text_color?: string;
      success_color?: string;
      alert_color?: string;
      overlaycolor?: string;
      dark_background_color?: string;
      secondary_star?: string;
	  muted_color?:string;
    white?:string;
    light_gray?:string;
    light_gray2?:string;
    };
  }
}

const theme = (dark: boolean): ThemeOptions => {
  return responsiveFontSizes(
    createTheme({
      colors: {
        primary: appColors.primary_color,
		...appColors
      },
      palette: {
        primary: {
          main: appColors.primary_color,

          contrastText: appColors.primary_color,
        },
        secondary: {
          main: appColors.secondary,
        },
        text: {
          primary: appColors.primary_text_color,
          secondary: appColors.second_text_color,
        },
        background: {
          paper: appColors.white,
        },
        error: {
          main: appColors.danger_color,
        },
      },

      typography: {
        fontFamily: ['"Montserrat"', "Roboto", "Arial", "sans-serif"].join(","),

        body1: {
          fontSize: "16px",
        },
        body2: {
          fontSize: "12px",
        },
        button: {
          textTransform: "initial",
          fontSize: "14px",
        },
      },

      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      spacing: [0, 4, 8, 16, 32, 64],
    })
  );
};

export default theme;
