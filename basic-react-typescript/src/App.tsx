import { useState } from "react";
import Post from "./components/Post";

type valueType = string | null;

const App = () => {
  const [value, setValue] = useState<valueType>("");

  return (
    <>
      <div>
        <Post id={1} title={""} toggle={true}>
          {/* Children passed to the Post component */}
          <p>This is some content inside the Post component.</p>
        </Post>
        <button></button>
      </div>
    </>
  );
};

//...

export default App;
