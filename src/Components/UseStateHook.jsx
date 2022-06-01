import { useState } from "react";

const UseStateHook = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value});
  };

  return (
    <form>
      <input
        type="text"
        name="firstName"
        placeholder="firstName"
        value={form.firstName}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        value={form.email}
        onChange={(e) => handleChange(e)}
      />

      <input
        type="password"
        name="password"
        placeholder="password"
        value={form.password}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default UseStateHook ;
