const ReduxUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userList = await res.json();

  return <div>{JSON.stringify(userList)}</div>;
};

export default ReduxUser;
