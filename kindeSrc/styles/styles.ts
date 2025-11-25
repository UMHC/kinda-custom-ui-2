// CSS Variables configuration
const kindeVariables = {
  baseFontFamily: "Open Sans, -apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, sans-serif",
  controlSelectTextBorderRadius: "99px",
  buttonPrimaryBackgroundColor: "#2E4E39",
  buttonPrimaryColor: "#fff",
  buttonBorderRadius: "99px",
  buttonSecondaryBackgroundColor: "#fff",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#e9edec",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "99px",
} as const;

export const getStyles = (): string => `
  @font-face {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://umhc.org.uk/fonts/OpenSans-Regular.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://umhc.org.uk/fonts/OpenSans-SemiBold.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://umhc.org.uk/fonts/OpenSans-Bold.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${kindeVariables.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeVariables.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeVariables.buttonSecondaryBorderRadius};
  }

  html, body {
    font-family: ${kindeVariables.baseFontFamily} !important;
    margin: 0;
    padding: 0;
  }

  [data-layout-container] {
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  @supports (-webkit-touch-callout: none) {
    [data-layout-container] {
      min-height: -webkit-fill-available;
    }
  }

  body *, 
  [data-kinde-root] *,
  [data-kinde-widget] *,
  h1, h2, h3, h4, h5, h6, p, span, div, input, button, label {
    font-family: ${kindeVariables.baseFontFamily} !important;
  }

  [data-kinde-choice-separator] {
    text-transform: uppercase;
  }

  [data-kinde-layout-auth-buttons] { 
    display: flex;
    justify-content: center;
  }

  [data-kinde-layout-auth-buttons-item] {
    width: 3rem;
    height: 3rem;
  }

  /* Mobile responsive styles */
  @media (max-width: 767px) {
    [data-side-panel] {
      display: none !important;
    }

    [data-layout-container] {
      flex-direction: column !important;
      padding: 1rem !important;
      background-image: none !important;
      background-color: #FFFCF7 !important;
    }

    [data-layout-container] > div {
      padding: 1.5rem !important;
      max-width: 100% !important;
    }

    main[style*="minWidth"] {
      min-width: auto !important;
      width: 100% !important;
      padding: 0 !important;
    }

    main {
      max-width: 100% !important;
    }

    input, [data-kinde-widget] input {
      width: 100% !important;
      min-width: 100% !important;
      box-sizing: border-box !important;
    }

    h2 {
      font-size: 1.5rem !important;
    }
  }

  @media (max-width: 480px) {
    [data-layout-container] {
      padding: 0.5rem !important;
    }

    [data-layout-container] > div {
      padding: 1rem !important;
    }

    main > div {
      padding: 0 !important;
    }

    h2 {
      font-size: 1.25rem !important;
    }

    input, [data-kinde-widget] input {
      font-size: 16px !important;
    }
  }
`;