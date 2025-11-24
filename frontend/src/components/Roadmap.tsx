import { CheckCircle2, Circle, Target } from 'lucide-react'

export default function Roadmap() {
  const phases = [
    {
      title: 'Current',
      status: 'complete',
      items: [
        'Working prototype',
        '2 disease categories',
        'Responsive web app',
        '500+ user tests'
      ]
    },
    {
      title: '3 Months',
      status: 'active',
      items: [
        'Production AI models',
        '5+ disease categories',
        'iOS/Android apps',
        'User accounts'
      ]
    },
    {
      title: '6-12 Months',
      status: 'planned',
      items: [
        'Clinical validation',
        'FDA/CE certification',
        'Healthcare partnerships',
        'Telemedicine integration'
      ]
    },
    {
      title: 'Long-term',
      status: 'planned',
      items: [
        'Health monitoring platform',
        'Predictive analytics',
        'Global health insights',
        'Open-source AI models'
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle2 className="w-6 h-6 text-green-600" />
      case 'active':
        return <Target className="w-6 h-6 text-blue-600" />
      default:
        return <Circle className="w-6 h-6 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'border-green-500 bg-green-50'
      case 'active':
        return 'border-blue-500 bg-blue-50'
      default:
        return 'border-gray-300 bg-white'
    }
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Roadmap</h2>
          <p className="text-xl text-gray-600">From hackathon project to global platform</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className={`border-2 rounded-xl p-6 ${getStatusColor(phase.status)}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">{phase.title}</h3>
                {getStatusIcon(phase.status)}
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl">
            <p className="font-semibold text-lg mb-1">Target: Within 1 year</p>
            <p className="text-2xl font-bold">50,000+ daily users across 20+ countries</p>
          </div>
        </div>
      </div>
    </div>
  )
}
