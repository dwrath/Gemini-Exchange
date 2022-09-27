import { useState } from "react";
import { Web3Storage } from "web3.storage";

// Construct with token and endpoint

function Upload() {
  let [hash, updateForm] = useState(null);
  let [link, setLink] = useState(null);

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

    let input = event.target[0].value;
    setLink(input);
    return link;
  };
  return (
    <div>
      <main className="main">
        <div className="topContainer">
          <h3 className="title">Upload file to IPFS</h3>
          <form onSubmit={onSubmitHandler}>
            <input type="file" name="file" />
            <button type="submit" className="button">
              Upload file
            </button>
          </form>
        </div>
        <div className="bottomContainer">
          <p className="paragraph">
            Click the link to access your file:
            <a href={`${hash}.ipfs.dweb.link`}>{hash}</a>
          </p>
        </div>

        <div>
          <form onSubmit={retrieve}>
            <label>Enter your hash to go to your file:</label>
            <input type="text"></input>
            <a href={`${link}.ipfs.dweb.link`}>{link}</a>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
export default Upload;
