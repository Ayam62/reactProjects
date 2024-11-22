const Error = ({ todo }) => {
  return <>{todo.length === 0 && <h3 className="h3">No task to do</h3>}</>;
};
export default Error;
