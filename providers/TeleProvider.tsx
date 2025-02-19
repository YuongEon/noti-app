import React, { useEffect } from 'react'
import axios from 'axios'

const TeleProvider = () => {
  const teleToken = process.env.TELEGRAM_BOT_TOKEN
  const sendMessage = async () => {
    const response = await axios.get(`https://api.telegram.org/bot${teleToken}/getUpdates`)
    const chatId =  response.data.result[0].message.chat.id
    const telegramUrl = `https://api.telegram.org/bot${teleToken}/sendMessage`;
    await axios.post(telegramUrl, {
      chat_id: chatId,
      text: 'Welcom to Noti App',
    });
  }

  useEffect(() => {
    sendMessage()
  }, [])

  return (
    <div>TeleProvider</div>
  )
}

export default TeleProvider