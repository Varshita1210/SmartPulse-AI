import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, BarChart3, Brain, Zap } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent analysis of form responses with behavioral patterns',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track completion rates, drop-off points, and user sentiment in real-time',
    },
    {
      icon: Zap,
      title: 'Smart Suggestions',
      description: 'AI recommends questions and improvements to boost completion rates',
    },
    {
      icon: Sparkles,
      title: 'Beautiful Forms',
      description: 'Create stunning, responsive forms that users love to fill',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-slate-900 to-dark">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              y: [0, 50, 0],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              y: [0, -50, 0],
              x: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
            variants={itemVariants}
          >
            SmartPulse AI
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Create forms that understand human behavior
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <Link
              to="/create"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Create Form
            </Link>
            <Link
              to="/dashboard"
              className="px-8 py-4 glass rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View Analytics
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 py-20 md:py-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text"
            variants={itemVariants}
          >
            Powerful Features
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="glass p-8 rounded-2xl backdrop-blur-xl hover:backdrop-blur-2xl transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg w-fit group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="px-4 sm:px-6 lg:px-8 py-20 md:py-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center backdrop-blur-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-slate-300 mb-8 text-lg">Create your first smart form and unlock AI-powered insights</p>
          <Link
            to="/create"
            className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

export default LandingPage
