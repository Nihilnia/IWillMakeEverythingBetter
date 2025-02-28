export default function Input({ label, isTextarea, ...props }) {
  const classes = "bg-stone-500";

  return (
    <p>
      <label>{label}</label>
      {isTextarea ? (
        <textarea className={classes} {...props}></textarea>
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
