import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            🌱 Plant Care Tracker
          </h1>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Track your plants, monitor their health, and never forget to water them again.
            Your personal garden assistant is here to help you grow beautiful plants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Dashboard</h3>
            <p className="text-gray-600 mb-4">
              View all your plants at a glance with health status and care reminders.
            </p>
            <Link 
              href="/dashboard" 
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              View Dashboard
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">➕</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Add Plant</h3>
            <p className="text-gray-600 mb-4">
              Add a new plant to your collection with detailed information and care instructions.
            </p>
            <Link 
              href="/plants/new" 
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Add New Plant
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Care Log</h3>
            <p className="text-gray-600 mb-4">
              Log watering, fertilizing, and other care activities for your plants.
            </p>
            <Link 
              href="/care-log" 
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              View Care Log
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-600">Total Plants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">0</div>
              <div className="text-sm text-gray-600">Need Water</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">0</div>
              <div className="text-sm text-gray-600">Need Care</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-600">Healthy</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 