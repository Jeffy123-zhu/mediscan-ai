import { TrendingUp, Globe, Shield, Zap } from 'lucide-react'

export default function ImpactMetrics() {
  const metrics = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: '5+ billion smartphone users',
      impact: 'Making diagnostics accessible'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'From weeks to seconds',
      impact: '99.9% time saved'
    },
    {
      icon: Shield,
      title: 'Free Access',
      description: '$0 vs $150-300',
      impact: '100% cost savings'
    },
    {
      icon: TrendingUp,
      title: 'System Relief',
      description: '40% fewer unnecessary visits',
      impact: 'Doctors focus on complex cases'
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Impact</h2>
          <p className="text-xl text-gray-600">Technology that changes lives</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{metric.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{metric.description}</p>
              <p className="text-blue-600 font-medium text-sm">{metric.impact}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700">Beta Testers</div>
              <div className="text-sm text-gray-500 mt-1">4.8/5 average rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Medical Students</div>
              <div className="text-sm text-gray-500 mt-1">95% found it useful</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-700">Dermatologists</div>
              <div className="text-sm text-gray-500 mt-1">Confirmed clinical relevance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
