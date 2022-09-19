import axios from "axios";
import { useEffect, useState } from "react";

const Task = () => {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState("ice");
  const [searchData, setSearchData] = useState("ice");
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleClick = () => {
    setSearchData(searchString);
  };

  const handleNext = () => {
    setPage(page + 1);
    fetchData();
  };

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
    fetchData();
  };

  const fetchData = () => {
    axios
      .get(
        `https://api.jikan.moe/v4/characters?page=${page}&limit=15&q=${searchData}&order_by=favorite&sort=desc`
      )
      .then((res) => {
        console.log(res?.data?.data?.length);
        if (res?.data?.data?.length === 0) {
          alert("No results found!");
        } else {
          setData(res?.data?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Here"
          onChange={handleChange}
          style={{
            width: "400px",
            height: 30,
          }}
        />
        <button
          onClick={handleClick}
          style={{
            width: "100px",
          }}
        >
          Search
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Array.isArray(data) &&
          data?.map(({ name, images }) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: 300,
                    padding: 5,
                    margin: 10,
                  }}
                >
                  <h4>{name}</h4>
                  <img
                    src={images.jpg.image_url}
                    alt="wait"
                    style={{ width: "100%", height: 150 }}
                  />
                </div>
              </>
            );
          })}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 50,
          marginLeft: 120,
          marginBottom: 100,
        }}
      >
        <button onClick={handlePrevious} style={{ height: 40 }}>
          Previous
        </button>
        <button onClick={handleNext} style={{ marginLeft: 5, height: 40 }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Task;
