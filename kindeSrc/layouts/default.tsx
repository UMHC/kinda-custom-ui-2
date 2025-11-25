import React from "react";

const styles: {
  container: React.CSSProperties;
  sidePanel: React.CSSProperties;
  sidePanelImage: React.CSSProperties;
} = {
  container: {
    display: "flex",
    height: "100vh",
  },
  sidePanel: {
    borderRadius: "1rem",
    flex: 1,
    margin: "0.5rem",
    maxWidth: "1024px",
    overflow: "hidden",
  },
  sidePanelImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div style={styles.container}>
      {props.children}
      <div style={styles.sidePanel}>
        <img 
          src="https://umhc.org.uk/images/side-panel.jpeg" 
          alt="University of Manchester Hockey Club" 
          style={styles.sidePanelImage}
        />
      </div>
    </div>
  );
};
