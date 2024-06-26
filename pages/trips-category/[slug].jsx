import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = ({ slug }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://go4explore-api.cyberoze.com/api/trips-category/${slug}`);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [slug]);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div>HELLO</div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

// Assuming you're using Next.js and want to fetch the slug server-side
export async function getServerSideProps(context) {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}

export default Test;