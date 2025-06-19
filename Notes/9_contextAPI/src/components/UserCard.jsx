export default function UserCard({ user }) {
  const { username, password } = user;

  return (
    <div>
      <h2>Username: {username}</h2>
      <h2>Password: {password}</h2>
    </div>
  );
}
