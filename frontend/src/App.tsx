/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Content, Cover, Response } from "./styles/GlobalStyles";
import axios from "axios";

function App() {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string>("teste");
  const [copy, setCopy] = useState<boolean>(false);

  async function shortUrlAPI() {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_URL_API}/url-shortener`,
        {
          url,
        }
      );

      if (error) {
        return setError("");
      }

      return setResponse(result.data as string);
    } catch (err: any) {
      setError(err.response.data.Error);
      return;
    }
  }

  function copyResponse() {
    setCopy(!copy);
    navigator.clipboard.writeText(response);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }

  return (
    <>
      <Cover>
        <Content>
          <h1>
            <img src="./url.png" alt="foto de um link" />
            Encurtador de Link
          </h1>

          <div>
            <label>Digite o link para ser encurtado:</label>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  shortUrlAPI();
                  return;
                }}
              >
                <input
                  type="text"
                  placeholder="https://www.google.com/"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <button type="submit">Diminuir URL</button>
              </form>
            </div>
            {error && <p>{error}</p>}
            {response && (
              <Response>
                <h2> Link Encurtado</h2>
                <input
                  type="text"
                  placeholder="https://www.google.com/"
                  required
                  value={response}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={() => copyResponse()}>Copiar</button>
                {copy && <span>url copiada</span>}
              </Response>
            )}
          </div>
        </Content>
      </Cover>
    </>
  );
}

export default App;
