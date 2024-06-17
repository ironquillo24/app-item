import { useState } from "react";

const Try = () => {
  const [data, setData] = useState("hello");
  const [loading, setLoading] = useState(0);

  console.log("loading out", loading);
  const handleClick = async () => {
    console.log("clicked");
    setLoading(5);
    console.log("loading in1", loading);
    if (loading) {
      const msg = "success";
      console.log(msg);
      console.log("loading in2", loading);
      setLoading(0);
    }
    console.log(await mockAPI());
    const newmsg = "success out loop";
    console.log(newmsg);
    setLoading(10);
    //const msg = await mockAPI();
  };

  return (
    <div className="h-screen">
      {loading ? <div>loading</div> : null}
      <div>{data}</div>
      <button type="button" onClick={handleClick}>
        click
      </button>
    </div>
  );
};
export default Try;

async function mockAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("success connection"), 3000);
  });
}
