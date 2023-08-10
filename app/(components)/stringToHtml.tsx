import { useEffect, useState } from "react";

export const StringToHtml = (props: string) => {
  const cleanComp = props.replace(
    /<\/?(?!(?:[^"]*li|[^"]*ul)\b)("[^"]*"|'[^']*'|[^>])*(>|$)/gm,
    ""
  );
  const [html, setHtml] = useState<string>("");
  useEffect(() => {
    setHtml(`${cleanComp}`);
  }, [html]);
  return (
    <div
      className={"list - disc"}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};
