import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FillFormPage = () => {
  const [responses, setResponses] = useState({
    name: '',
    feedback: '',
    rating: 0,
    suggestions: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setResponses((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (value) => {
    setResponses((prev) => ({ ...prev, rating: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-slate-900 to-dark">
      <Navbar />

      <div className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex items-center">
        <div className="w-full max-w-2xl mx-auto">
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              <div className="glass rounded-2xl p-12 text-center backdrop-blur-xl">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center"
                >
                  <span className="text-2xl">✓</span>
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p className="text-slate-400">Your response has been recorded</p>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-8 md:p-12 backdrop-blur-xl"
          >
            <h1 className="text-4xl font-bold mb-2 gradient-text">Customer Feedback Form</h1>
            <p className="text-slate-400 mb-8">Help us improve by sharing your thoughts</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Text Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium mb-3">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={responses.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/20 transition-all"
                />
              </motion.div>

              {/* Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium mb-3">Feedback *</label>
                <textarea
                  name="feedback"
                  value={responses.feedback}
                  onChange={handleChange}
                  placeholder="Tell us what you think..."
                  required
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/20 transition-all resize-none"
                />
              </motion.div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium mb-3">Rating *</label>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-lg font-bold transition-all ${
                        responses.rating >= star
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-dark'
                          : 'bg-white/10 text-slate-400 hover:bg-white/20'
                      }`}
                    >
                      {star}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Suggestions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium mb-3">Suggestions (Optional)</label>
                <textarea
                  name="suggestions"
                  value={responses.suggestions}
                  onChange={handleChange}
                  placeholder="Any suggestions for improvement?"
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/20 transition-all resize-none"
                />
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 pt-4"
              >
                <Link
                  to="/"
                  className="flex-1 px-6 py-3 glass rounded-lg font-semibold hover:bg-white/20 transition-all text-center"
                >
                  Cancel
                </Link>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                >
                  Submit Response
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-slate-400">
              Want to see the analytics?{' '}
              <Link to="/dashboard" className="text-indigo-400 hover:text-indigo-300 font-semibold">
                View Dashboard
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FillFormPage
