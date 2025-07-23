import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authSlice'


function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e: any) => {
    e.preventDefault()
    dispatch(login())
    navigate('/dashboard')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-md rounded-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Login
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 px-3 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
