import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import { getContact } from '../../../store/features/contact/getAll' 
import ContactCard from './contactadd'

const Contact = () => {
    const dispatch = useAppDispatch()
    const { contact, error, status } = useAppSelector(state => state.contact)

    React.useEffect(() => {
        dispatch(getContact())
    }, [dispatch])

    if (status === "Loading") return <p>Yükleniyor...</p>
    if (status === "Error") return <p className="text-red-500">{error}</p>

    return (
        <div className="space-y-6 container mx-auto py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Contact Yönetimi
                </h1>
            </div>

            {contact.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">
                    Henüz hiç contact kaydı yok.
                </p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {contact.map((c) => (
                        <ContactCard key={c.id} contact={c} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Contact
