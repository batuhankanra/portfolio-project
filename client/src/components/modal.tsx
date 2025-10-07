import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { closeModal } from '../store/features/modal'

const Modal:React.FC = () => {
  const dispatch =useAppDispatch()
  const {title,content} = useAppSelector(state=>state.modal)
  return (
     <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={()=>dispatch(closeModal())}
      />

      {/* Modal İçerik */}
      <div className="relative z-10 w-full max-w-lg bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 animate-fadeIn">
        {/* Başlık */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-700 pb-3 mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h2>
          <button
            onClick={()=>dispatch(closeModal())}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <IoMdClose size={22} />
          </button>
        </div>

        {/* İçerik */}
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Modal
