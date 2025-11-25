"use server";

import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";

const styles: {
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
} = {
  loginForm: {
    width: "100%",
    maxWidth: "400px",
  },
  heading: {
    fontWeight: "600",
    fontSize: "2rem",
  },
  description: {
    marginBottom: "1.5rem",
  },
};

export const Widget = (props: { heading: string; description: string }) => {
  return (
    <main style={styles.loginForm}>
      <div>
        <h2 style={styles.heading}>{props.heading}</h2>
        <p style={styles.description}>{props.description}</p>
        {getKindeWidget()}
      </div>
    </main>
  );
};
