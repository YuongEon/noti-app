'use client'
import { useEffect, ReactNode } from 'react'
import axios from 'axios'
import { telegram } from '@/constant/telegram'

const TeleProvider = ({ children }: { children: ReactNode }) => {
	const teleToken = telegram.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
	const sendMessage = async () => {
		const response = await axios.get(
			`https://api.telegram.org/bot${teleToken}/getUpdates`
		)
		const chatId = response.data.result[0].message.chat.id
		const telegramUrl = `https://api.telegram.org/bot${teleToken}/sendMessage`

		if (!chatId) {
			await axios.post(telegramUrl, {
				chat_id: chatId,
				text: 'Welcom to Noti App',
			})
		}

		await axios.post(telegramUrl, {
			chat_id: chatId,
			text: 'Welcom back to Noti App',
		})
	}

	useEffect(() => {
		sendMessage()
	}, [])

	return <>{children}</>
}

export default TeleProvider
