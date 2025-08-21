export default async function Home() {
  // 3s
  return (
    <div className="mt-4 px-4 flex justify-center items-center h-screen flex-col">
      <blockquote className="text-center text-2xl font-semibold text-gray-900 italic dark:text-white mb-4">
          {/* The book of */}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-green-500 gap-4">
            <span className="relative text-white dark:text-gray-950">Components & Layouts</span>
          </span>
          {/* and */}
        </blockquote>
      <a className="bg-white rounded text-gray-900 py-2 px-4 font-bold" href="/dashboard">Dashboard</a>
    </div>
  )
}