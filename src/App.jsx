import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <>
      <main className="main" onSubmit={handleSubmit(onSubmit)}>
        <h2>Welcome to page</h2>
        <form className="form">
          <div className="secson1">
            <label >username</label>
            <br />
            <input
              {...register("text", { required: true ,minLength:8})}
              type="text"
              placeholder=" username"
              
              />
              {errors.text &&<p className='para'>this field is required</p>}
              
          </div>

          <div className="secson2">
            <label >email</label>
            <br />
            <input
            {...register("email", { required: true  })}
              type="email"
              placeholder=" email"
            />
            {errors.email &&<p className='para'>this field is required</p>}
          </div>

          <div className="secson3">
            <label >passoword</label>
            <br />
            <input
            {...register("password", { required:{value:true}})}
              type="password"
              placeholder=" password"
              />
              {errors.password &&<p className='para'>this field is required</p>}
          </div>

        <div className="btn">
          <button className="btn">login</button>
        </div>
        </form>
      </main>      

    </>
  )
}

export default App
