import type { NextPage } from "next";
import { useRouter } from "next/router";

const Training: NextPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  return <div>{slug}</div>;
};

export default Training;
