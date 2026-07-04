import mongoose from 'mongoose';

const chatbotConversationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    sessionId: String,
    messages: [{
      role: { type: String, enum: ['user', 'assistant'] },
      content: String,
      timestamp: { type: Date, default: Date.now },
    }],
    context: {
      topic: String,
      city: String,
      category: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('ChatbotConversation', chatbotConversationSchema);
