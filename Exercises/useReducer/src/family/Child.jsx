export default function Child({ newUser }) {
  const { userName, password } = newUser;

  return (
    <div>
      <h4>Username: {userName}</h4>
      <h4>Password: {password}</h4>
    </div>
  );
}
