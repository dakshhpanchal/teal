export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
