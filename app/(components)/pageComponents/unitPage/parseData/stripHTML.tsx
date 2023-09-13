export default function stripHTML(props: string) {
  const cleanComp = props
    ?.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "")
    .replace(/&lt;.*?&gt;/g, "");
  return cleanComp;
}
