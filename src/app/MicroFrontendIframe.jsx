import React from "react";

const MicroFrontendIframe = ({ src, title }) => {
  return (
    <div style={{ width: "100%", height: "90vh", border: "none", overflow: "hidden" }}>
      <iframe
        src={src}
        title={title}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default MicroFrontendIframe;
