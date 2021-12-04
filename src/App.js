import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

function App() {
  const file_name = "posts.mdx";
  const [post, setPost] = useState("");
  useEffect(() => {
    import(`./md/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Markdown>{post}</Markdown>
    </div>
  );
}
export default App;
