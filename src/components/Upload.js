import { useState } from "react";
import { Web3Storage } from "web3.storage";

// Construct with token and endpoint

function Upload() {
  // Construct with token and endpoint

  const apiToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDNjOGIyRTA1RjU2OGM0Q0Y2NjBGYUQ3Y0MyYzcxMTIzQWI0N0REMzIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjM5ODYyNzgzNDYsIm5hbWUiOiJHZW1pbmlFeGNoYW5nZSJ9.wo08D1850XYCxCFC2w7r59s9_b9TlOZRMxIWijhlVzQ";
  const client = new Web3Storage({ token: apiToken });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const files = form[0].files;
    const rootCid = await client.put(files, {
      name: "files",
      maxRetries: 3,
    });
    if (!files || files.length === 0) {
      return alert("No files selected");
    }
  };

  return (
    <div className="App">
      {
        <>
          <h3>Upload file to IPFS</h3>
          <form onSubmit={onSubmitHandler}>
            <input type="file" name="file" />
            <button type="submit">Upload file</button>
          </form>
        </>
      }
    </div>
  );
}
export default Upload;
