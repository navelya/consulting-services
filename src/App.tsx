import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">

      <section className="relative min-h-screen flex items-center justify-center px-6 py-20" style={{ background: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: '#1e293b' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Scale Your Business Strategically
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#1e293b' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We\'ve helped 500+ companies achieve their goals. Let\'s discuss how we can help you grow.
          </motion.p>
          
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: '#f0f9ff' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#1e293b' }}>
            Scale Your Business Strategically
          </h2>
          {submitted ? (
            <div className="text-center p-12 rounded-xl border-2" style={{ borderColor: '#10b981', backgroundColor: '#f0fdf4' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10b981' }}>Thank You!</h3>
              <p style={{ color: '#059669' }}>Your message has been received.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div key="name">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                  Full Name *
                </label>
                
                <input
                  type="text"
                  required={true}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  placeholder="Alex Rivera"
                  onChange={(e) => setFormData({...formData, 'name': e.target.value})}
                />
                
              </div>
              
              <div key="email">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                  Email Address *
                </label>
                
                <input
                  type="email"
                  required={true}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  placeholder="alex@company.com"
                  onChange={(e) => setFormData({...formData, 'email': e.target.value})}
                />
                
              </div>
              
              <div key="company">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                  Company Name *
                </label>
                
                <input
                  type="text"
                  required={true}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  placeholder="Growth Inc."
                  onChange={(e) => setFormData({...formData, 'company': e.target.value})}
                />
                
              </div>
              
              <div key="challenge">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                  Biggest Business Challenge
                </label>
                
                <textarea
                  required={false}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e5e5' }}
                  rows={4}
                  placeholder="What\'s holding you back from achieving your goals?"
                  onChange={(e) => setFormData({...formData, 'challenge': e.target.value})}
                />
                
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
                style={{ 
                  backgroundColor: '#0ea5e9',
                  color: '#ffffff'
                }}
              >
                Book Free Consultation
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  )
}

export default App
