export default function stripHTML(props: string) {
  const cleanComp = props?.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
  return cleanComp;
}
