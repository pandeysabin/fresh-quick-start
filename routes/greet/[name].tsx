import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const { params: { name }, url, route } = props;

  return <div>Hello {name}</div>;
}
