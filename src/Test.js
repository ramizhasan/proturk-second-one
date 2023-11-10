import { useEffect, useState } from "react";

function Test() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));

    let intervalId = setInterval(() => {
      console.log("interval calisti");
    }, 1000);

    return () => {
      console.log("component destroyed");
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  /*   useEffect(() => {
    console.log("component render oldu");
  }); */

  return (
    <div>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)} <br />
      <button
        className="bg-green-200"
        onClick={() => setPostId((postId) => postId + 1)}
      >
        Sonraki Konu
      </button>
      <hr />
      test komponenti
    </div>
  );
}

export default Test;
