import Child from "./Child";

export default function Parent({ userData }) {
  return (
    <section>
      <h2>-New user-</h2>
      <Child newUser={userData} />
    </section>
  );
}
