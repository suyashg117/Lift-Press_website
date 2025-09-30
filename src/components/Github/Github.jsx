import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/suyashg117")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="Avatar"
        className="rounded-full w-32 h-32 mx-auto"
      />
      <p className="text-center m-4 text-2xl">
        Hii my name is suyash. i am a web developer.please follow my github
        account.
      </p>
    </div>
  );
}

export default Github;
