import Pair from "./components/Pair";

const FILE_TREE = {
  node: "ROOT",
  branch: [
    {
      node: "node_modules",
      branch: [
        {
          node: "@types",
        },
      ],
    },
    {
      node: "src",
      branch: [
        {
          node: "assets",
          branch: [
            {
              node: "image.png",
            },
          ],
        },
        {
          node: "main.tsx",
        },
      ],
    },
    {
      node: "index.html",
    },
  ],
};

const App = () => {
  return <Pair tree={FILE_TREE} />;
};

export default App;
