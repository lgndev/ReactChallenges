interface PostProps {
  id: number;
  title: string;
  toggle: boolean;
  children?: React.ReactNode; //
}

const Post: React.FC<PostProps> = ({ id, title, toggle, children }) => {
  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{toggle ? "Toggled" : "Not Toggled"}</div>
      <div>{children}</div>
    </>
  );
};

export default Post;
