import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import QuestionTypeSelector from './QuestionTypeSelector'

const QuestionBuilder = ({ onAdd, onCancel }) => {
  const [question, setQuestion] = useState('')
  const [type, setType] = useState(null)
  const [options, setOptions] = useState([''])
  const [error, setError] = useState('')

  const handleAddOption = () => {
    setOptions([...options, ''])
  }

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index))
  }

  const handleOptionChange = (index, value) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
  }

  const handleSubmit = () => {
    if (!question.trim()) {
      setError('Question cannot be empty')
      return
    }
    if (!type) {
      setError('Please select a question type')
      return
    }

    const questionData = {
      question: question.trim(),
      type,
      ...(type === 'multiChoice' && { options: options.filter((o) => o.trim()) }),
    }

    onAdd(questionData)
    setQuestion('')
    setType(null)
    setOptions([''])
    setError('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-4"
    >
      <h3 className="font-semibold text-lg">Add New Question</h3>

      {/* Question Input */}
      <div>
        <label className="block text-sm font-medium mb-2">Question Text *</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/20 transition-all"
        />
      </div>

      {/* Question Type */}
      <div>
        <label className="block text-sm font-medium mb-2">Question Type *</label>
        <QuestionTypeSelector onSelect={setType} />
      </div>

      {/* Multiple Choice Options */}
      {type === 'multiChoice' && (
        <div>
          <label className="block text-sm font-medium mb-2">Options</label>
          <div className="space-y-2">
            {options.map((option, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-white/20 transition-all"
                />
                {options.length > 1 && (
                  <button
                    onClick={() => handleRemoveOption(index)}
                    className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={handleAddOption}
              className="flex items-center gap-2 px-3 py-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Option
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={onCancel}
          className="flex-1 px-4 py-2 glass rounded-lg hover:bg-white/20 transition-all"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all font-semibold"
        >
          Add Question
        </button>
      </div>
    </motion.div>
  )
}

export default QuestionBuilder
