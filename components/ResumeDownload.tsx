import React from "react";

const ResumeDownload: React.FC = () => {
  return (
    <div id="resume-download" style={{ textAlign: "center", margin: "2rem 0" }}>
      <a
        href="Manav Resume with links.pdf"
        download
        style={{
          display: "inline-block",
          padding: "0.75rem 2rem",
          background: "#007bff",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: 600,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeDownload;
