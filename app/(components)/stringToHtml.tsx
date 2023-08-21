import { useEffect, useState } from "react";

export const StringToHtml = (props: string) => {
  const cleanComp = props.replace(
    /<\/?(?!(?:[^"]*li|[^"]*ul)\b)("[^"]*"|'[^']*'|[^>])*(>|$)/gm,
    ""
  );
  const classComp = cleanComp.replaceAll("<li>", "<li class=`background:red`>"); // i should be able to style it like that but it doenst work
  const styling =
    // "ul{ background: #3399ff; padding: 20px;} ul,li{background: #cce5ff; color: darkblue; color: darkblue; } ";
    "list-style-type:disc";
  const [html, setHtml] = useState<string>("");
  useEffect(() => {
    // setHtml(`${cleanComp}`);
    setHtml(`<div style=${styling}>${classComp}</div>`);
  }, [html]);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
