import { Users, Clock, DollarSign, Heart } from 'lucide-react'

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      value: '2.6B',
      label: 'People lack access to care',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      value: '4-8 weeks',
      label: 'Average wait for specialist',
      color: 'text-purple-600'
    },
    {
      icon: DollarSign,
      value: '$150-300',
      label: 'Cost per consultation',
      color: 'text-green-600'
    },
    {
      icon: Heart,
      value: '40%',
      label: 'Survival rate drop if late',
      color: 'text-red-600'
    }
  ]

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          The Global Healthcare Crisis
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/90 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-white text-center mt-8 text-lg">
          MediScan AI is changing this
        </p>
      </div>
    </div>
  )
}
