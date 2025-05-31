import { useState } from "react";
import instance from "./axiosConfig";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...form, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await instance.post("/api/data/save", form);
      if (response.status === 201) console.log(response.data.message);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={form.name}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={form.email}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default App;
