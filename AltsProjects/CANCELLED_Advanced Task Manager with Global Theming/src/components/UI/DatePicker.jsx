export default function Datepicker({ defValue, isDisabled }) {
  return <input type="date" name="dueDate" defaultValue={defValue} disabled={isDisabled} />;
}
