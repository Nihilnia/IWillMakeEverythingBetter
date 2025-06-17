import UserCard from "./UserCard";

export default function UserList({ allUsers }) {
  return (
    <section>
      {allUsers.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </section>
  );
}
