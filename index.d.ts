import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body1Bold: CSSProperties;
    body2Bold: CSSProperties;
    captionBold: CSSProperties;
    captionItalicBold: CSSProperties;
    captionItalic: CSSProperties;
    caption2Bold: CSSProperties;
    caption2: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body1Bold?: CSSProperties;
    body2Bold?: CSSProperties;
    captionBold?: CSSProperties;
    captionItalicBold?: CSSProperties;
    captionItalic?: CSSProperties;
    caption2Bold?: CSSProperties;
    caption2?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1Bold: true;
    body2Bold: true;
    captionBold: true;
    captionItalicBold: true;
    captionItalic: true;
    caption2Bold: true;
    caption2: true;
    h3: false;
  }
}
