import { useState } from "react";
import { Web3Storage } from "web3.storage";

// Construct with token and endpoint

function Upload() {
  let [hash, updateForm] = useState(null);
  // Construct with token and endpoint

  const apiToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNjOGIyRTA1RjU2OGM0Q0Y2NjBGYUQ3Y0MyYzcxMTIzQWI0N0REMzIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjM5ODYyNzgzNDYsIm5hbWUiOiJHZW1pbmlFeGNoYW5nZSJ9.wo08D1850XYCxCFC2w7r59s9_b9TlOZRMxIWijhlVzQ";
  const client = new Web3Storage({ token: apiToken });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let form = event.target;
    const file = form[0].files;
    let rootCid = await client.put(file, {
      name: "files",
      maxRetries: 3,
    });

    if (!file || file.length === 0) {
      return alert("No files selected");
    }

    updateForm(rootCid);
  };

  const retrieve = async (event) => {
    event.preventDefault();
    let userRootCid = event.target;
    const res = await client.get(userRootCid); // Web3Response
    const files = await res.files(); // Web3File[]
    for (const file of files) {
      console.log(`${file.cid} ${file.name} ${file.size}`);
    }
  };

  return (
    <div>
      <main className="main">
        <div className="topContainer">
          <h3 className="title">Upload file to IPFS</h3>
          <form onSubmit={onSubmitHandler}>
            <input type="file" name="file" />
            <button type="submit">Upload file</button>
          </form>
        </div>
        <div className="bottomContainer">
          <p>This is your hash: {hash}</p>
        </div>
        <div>
          <label>type hash below</label>
          <input type="text"></input>
          <button type="submit" onClick={retrieve}>
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}
export default Upload;
