import { useEffect, useState } from "react";

export const StringToHtml = (props: string) => {
  const cleanComp = props.replace(
    /<\/?(?!(?:[^"]*li|[^"]*ul)\b)("[^"]*"|'[^']*'|[^>])*(>|$)/gm,
    ""
  );
  const styling = "list-style-type: disc;";
  const [html, setHtml] = useState<string>("");
  useEffect(() => {
    // setHtml(`${cleanComp}`);
    setHtml(`<div style=${styling}>${cleanComp}</div>`);
  }, [html]);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
