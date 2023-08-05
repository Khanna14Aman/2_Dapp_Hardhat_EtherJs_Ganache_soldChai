import { useEffect, useState } from "react";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const getData = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && getData();
  }, [contract]);
  // console.log(memos[0][1]);
  return (
    <>
      <p style={{ textAlign: "center", marginTop: "20px" }}>Messages</p>
      {memos.map((memo) => {
        return (
          <div
            className="container-fluid"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {memo[0]}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}
                  >
                    {new Date(parseInt(memo[2]) * 1000).toLocaleString()}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {memo[1]}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "400px",
                    }}
                  >
                    {memo[3]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default Memos;
