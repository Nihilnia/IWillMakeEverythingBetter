import UserForm from "./components/UserForm";
import UserContextProvider from "./context/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <UserForm />
    </UserContextProvider>
  );
}
