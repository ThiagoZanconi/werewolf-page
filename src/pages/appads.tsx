import { useEffect, useState } from "react";

export default function TextPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/text.txt")
      .then(res => res.text())
      .then(setContent);
  }, []);

  return <pre>{content}</pre>;
}