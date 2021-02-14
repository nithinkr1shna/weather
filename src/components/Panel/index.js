import React from "react";
import PanelLayout from "../../layouts/PanelLayout";

const style = {
  minHeight: "25%",
  width: "75vw",
  marginTop: "60vh",
  borderRadius: "0 5px 5px 0"
};

const Panel = () => {
  return (
    <PanelLayout>
      <div style={style} className="z-10">
        Panel
      </div>
    </PanelLayout>
  );
};

export default Panel;
