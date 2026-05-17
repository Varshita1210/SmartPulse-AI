import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ResponseChart = () => {
  const data = [
    { name: 'Week 1', responses: 120, completed: 89 },
    { name: 'Week 2', responses: 200, completed: 148 },
    { name: 'Week 3', responses: 150, completed: 111 },
    { name: 'Week 4', responses: 280, completed: 207 },
    { name: 'Week 5', responses: 320, completed: 237 },
    { name: 'Week 6', responses: 176, completed: 130 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 backdrop-blur-xl"
    >
      <h3 className="text-xl font-bold mb-6">Response Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
          <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
            }}
          />
          <Line type="monotone" dataKey="responses" stroke="#6366f1" strokeWidth={2} dot={{ fill: '#6366f1' }} />
          <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export default ResponseChart
