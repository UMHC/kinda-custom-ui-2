import React from "react";

const styles: {
  container: React.CSSProperties;
  contentWrapper: React.CSSProperties;
} = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url(https://umhc.org.uk/images/side-panel.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    padding: "2rem",
  },
  contentWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "1rem",
    padding: "3rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
    position: "relative",
    zIndex: 1,
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
