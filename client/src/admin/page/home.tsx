
const AdminHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl shadow">
    <h2 className="text-lg font-semibold">Kullanıcılar</h2>
    <p className="text-2xl font-bold">124</p>
  </div>
  <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl shadow">
    <h2 className="text-lg font-semibold">Blog Yazıları</h2>
    <p className="text-2xl font-bold">52</p>
  </div>
  <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl shadow">
    <h2 className="text-lg font-semibold">Projeler</h2>
    <p className="text-2xl font-bold">7</p>
  </div>
  <div className="p-4 bg-white dark:bg-zinc-800 rounded-xl shadow">
    <h2 className="text-lg font-semibold">Aktif Kullanıcılar</h2>
    <p className="text-2xl font-bold">23</p>
  </div>
</div>
  )
}

export default AdminHome
