import Main_topic_table from "./components/Main_topic_table";
import Sub_topic_table from "./components/Sub_topic_table";
import Sub_sub_topic_c from "./components/Sub_sub_topic_c";
import { IsLoadingContex } from "./contexts/isLoadingContext";
import { useState } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <IsLoadingContex.Provider value={{ loading, setLoading }}>
        <div id="main_content">
          <Main_topic_table />
          <Sub_topic_table />
          <Sub_sub_topic_c />
        </div>
      </IsLoadingContex.Provider>
    </>
  );
}

export default App;
