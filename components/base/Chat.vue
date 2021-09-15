<template>
  <div class="fixed flex items-end space-x-3 bottom-4 right-4">
    <div v-if="isOpen" class="flex flex-col p-3 rounded-md w-72 h-96">
      <div
        id="chat-window"
        class="flex-1 p-3 space-y-3 overflow-y-scroll border border-indigo-500 shadow  rounded-t-md bg-gray-50"
      >
        <div
          v-for="(message, messageIndex) of chatList"
          :key="`message-${messageIndex}`"
          class="w-4/5 px-3 py-2 border border-gray-200 shadow message"
          :class="messageClass(message)"
        >
          <div class="message-content" :class="{ sender: message.sender }">
            {{ message.content }}
          </div>
        </div>
        <div class="to-bottom"></div>
      </div>
      <div class="flex-none">
        <input
          v-model="messageToSend"
          type="text"
          placeholder="Write here"
          class="border border-blue-500 w-full text-lg rounded-b-md px-3 py-1.5"
          @keypress.enter="sendMessage"
        />
      </div>
    </div>
    <div
      class="w-16 h-16 p-4 bg-white border border-indigo-600 rounded-full shadow  hover:cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <img
        src="https://img.icons8.com/ios-filled/452/chat--v1.png"
        alt="Rocket Inc. chatbot"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      messageToSend: '',
      isOpen: false,
    }
  },
  methods: {
    messageClass(message) {
      return message.sender
        ? 'bg-blue-300 rounded-tr-lg rounded-br-lg rounded-bl-lg'
        : 'bg-yellow-300 rounded-tl-lg rounded-br-lg rounded-bl-lg text-right ml-auto'
    },
    scrollToElement() {
      // Scroll to show a placeholder div placed at the bottom of the chat
      // Used to auto scroll the chat when a new message is sent
      const el = this.$el.getElementsByClassName('to-bottom')[0]

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    sendMessage() {
      const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
      this.$store.commit('addMessage', {
        sender: false,
        content: this.messageToSend,
      })
      const packet = {
        message: { type: 'data', payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId,
      }
      WebSocketEventBus.$emit('send', packet)
      this.messageToSend = ''

      // Scroll to bottom of the chat after a small delay to fetch and display the messages
      setTimeout(() => {
        this.scrollToElement()
      }, 200)
    },
  },
}
</script>
