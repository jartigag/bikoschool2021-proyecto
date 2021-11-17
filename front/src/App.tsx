import "./_reset.css";
import "./App.css";
import GuifContainer from "./ui/components/GuifContainer/GuifContainer";
import { useState, useEffect } from "react";
import { StoredMemeData } from "./core/domain/StoredMemeData";
import { fetchAllMemes } from "./core/service/ApiService";

function App() {
  const [memes, setMemes] = useState<StoredMemeData[]>([]);

  const getMemes = async () => {
    const response = await fetchAllMemes();
    setMemes(response);
  };

  useEffect(() => {
    getMemes();
  }, []);

  if (memes.length === 0) {
    return (
      <>
        <p>Cargando...</p>
      </>
    );
  }

  return (
    <>
      <GuifContainer memes={memes} />
    </>
  );
}

export default App;