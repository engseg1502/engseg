import type { NextPage } from "next";
import { useRouter } from "next/router";

const Service: NextPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  return <div>{slug}</div>;
};

export default Service;
