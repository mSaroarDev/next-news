export const Form = ({ children, onSubmit, className = "" }) => {
  return (
    <>
      <form onSubmit={onSubmit} className={className}>
        {children}
      </form>
    </>
  );
};

export const Input = ({
  type = "text",
  onChange,
  id,
  name,
  value,
  placeholder,
}) => {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder || "Enter Placeholder"}
      />
    </>
  );
};

export const Texarea = ({ onChange, id, name, value, placeholder }) => {
  return (
    <>
      <textarea
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder || "Enter Placeholder"}
      ></textarea>
    </>
  );
};
