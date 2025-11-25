import React from "react";

const styles: {
  container: React.CSSProperties;
  contentWrapper: React.CSSProperties;
} = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: "url(https://umhc.org.uk/images/side-panel.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  contentWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "1rem",
    padding: "2rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div style={styles.container} data-layout-container>
      <div style={styles.contentWrapper}>
        {props.children}
      </div>
    </div>
  );
};
