import { useState } from 'react'
import instance from "./axiosConfig"
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(e){
    const {name, value} = e.target;
    setForm((perv) => ({...form, [name]:value}));
  }

  async function handleSubmit(e){
    e.preventDefault();

    try{
      const response = await instance.post("/api/v1/data/save", form);
      if(response.status === 201){
        console.log(response.data.message);
      }
    }catch(error){
      console.log(error);
    }

  }

  return (
    <>
      <div>
        <h1>Form</h1>
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
        </div>
    </>
  )
}

export default App;