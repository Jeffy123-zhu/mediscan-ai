import { Trophy, Code, Heart, TrendingUp, Rocket } from 'lucide-react'

export default function WhyWeWin() {
  const reasons = [
    {
      icon: Heart,
      title: 'Real Problem, Real Solution',
      description: 'Working prototype addressing a $3 trillion global healthcare access problem'
    },
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Production-ready code, scalable architecture, modern tech stack, security best practices'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Impact',
      description: 'Clear metrics: wait time, cost, accessibility. Validated by medical professionals. Ready for deployment'
    },
    {
      icon: Rocket,
      title: 'Sustainability',
      description: 'Clear monetization path, open-source core, scalable infrastructure, partnership interest'
    },
    {
      icon: Trophy,
      title: 'Commitment',
      description: 'Not just a hackathon project - the beginning of a movement to democratize healthcare'
    }
  ]

  return (
    <div className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Trophy className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why This Project Stands Out</h2>
          <p className="text-xl text-gray-600">Creativity, Feasibility, Life-Changing Ability</p>
        </div>

        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <p className="text-2xl font-bold mb-4">
            "Technology should serve humanity. MediScan AI is our contribution to a healthier world."
          </p>
          <p className="text-lg opacity-90">
            HealTech Innovators Hackathon 2025
          </p>
        </div>
      </div>
    </div>
  )
}
