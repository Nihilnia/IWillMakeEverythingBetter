export default function InputGroup({ labelTitle, labelFor, ...props }) {
  return (
    <div className="control">
      <label htmlFor={labelFor}>{labelTitle}</label>
      <input type="text" id={labelFor} name={labelFor} required {...props} />
    </div>
  );
}
