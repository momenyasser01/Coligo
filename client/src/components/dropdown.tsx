import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
} from '@floating-ui/react'

import Avatar from '@mui/material/Avatar'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/authSlice'


export default function Dropdown() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (e: any) => {
    e.preventDefault()
    dispatch(logout())
    navigate('/login')
  }

  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start',
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ])


  return (
    <div className="inline-block text-left">
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="text-white rounded  transition"
      >
        <Avatar
          className="w-6 h-6 rounded-full"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </button>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="bg-white border border-gray-200 rounded shadow-lg z-10 w-40"
        >
          <ul className="py-1 text-sm text-gray-700">
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
              Profile
            </li>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
              Settings
            </li>
            <li
              onClick={handleLogout}
              className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
