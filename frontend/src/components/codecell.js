import React from "react";
import "./codecell.css";

const CodeCell = ({ codeString }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="code-wrapper">
      <div className="code-toolbar">
        <span className="language-label">py</span>
        <button className="copy-button" onClick={copyToClipboard}>
          Copy code
        </button>
      </div>
      <pre className="code-block">
        <code>{codeString}</code>
      </pre>
    </div>
  );
};

export default CodeCell;
