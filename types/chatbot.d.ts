/* eslint-disable camelcase */
declare module 'chatbot-types' {
  type ChatbotActivityType =
    | 'START'
    | 'END'
    | 'OR'
    | 'XOR'
    | 'PARALLEL'
    | 'TASK'

  type ChatbotActivityCallback =
    | 'start'
    | 'generic_or'
    | 'generic_xor'
    | 'nothing'
    | 'guide'

  interface ChatbotActivity {
    my_id: string
    next_id: string | null
    my_type: ChatbotActivityType
    callback: ChatbotActivityCallback
    choices?: string[]
  }

  interface ProcessBase {
    first_activity_id: string
    activities: ChatbotActivity[]
  }

  interface KbOrXor {
    initials: string[]
    unknown: string
    choices: {
      id: string
      intents: string[]
      utterance: string[]
      payload: unknown
    }
  }

  interface KbTask {
    initials: string[]
    completed: {
      utterance: string
      payload: unknown
    }
  }

  type KbTaskSentence = string | KbTask

  interface KnowledgeBase {
    [key: string]: unknown
    steps_v: string[]
    continue_v: string[]
    stay_message: string
  }

  interface ChatbotData {
    kb: KnowledgeBase
    process: ProcessBase
  }

  interface Chatbot {
    name: string
    data: ChatbotData
  }
}
