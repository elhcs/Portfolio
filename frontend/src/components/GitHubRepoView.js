import { useEffect, useState } from "react";
import  "./githubx.css";
function GitHubRepoView() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/elhcs/portfolio/contents")
      .then((response) => response.json())
      .then((data) => setFiles(data));
  }, []);

  return (
    <div className="file-list p-4">
      {files.map((file) => (
        <div key={file.sha} className="file-item flex items-center space-x-2">
          <span className="icon">
            {file.type === "dir" ? "📁" : "📄"}
          </span>
          <a
            href={file.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {file.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default GitHubRepoView;
