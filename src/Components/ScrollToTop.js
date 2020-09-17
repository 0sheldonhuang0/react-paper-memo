import React from "react";

export default function ScrollToTop() {
  return (
    <React.Fragment>
      <div>{document.querySelector('body').scrollTo(0,0)}</div>
    </React.Fragment>
  );
}
