import { Resend } from 'resend';
import { getWelcomeEmailHtml } from '../utils/email-template';

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()
        const resend = new Resend(config.resendApiKey);

        const body = await readBody(event)
        const { email } = body

        if (!email) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Email is required'
            })
        }

        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid email format'
            })
        }

        const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '10e7b202-0604-459a-a7e9-0abaadd10e98'

        // Добавление контакта в аудиторию
        try {
            await resend.contacts.create({
                email: email,
                firstName: '',
                lastName: '',
                unsubscribed: false,
                audienceId: AUDIENCE_ID
            })
        } catch (audienceError) {
            console.error('❌ Ошибка добавления в аудиторию:', audienceError)
        }

        // Отправка welcome письма
        try {
            const fromEmail = process.env.RESEND_DOMAIN
                ? `ChartCraft <noreply@${process.env.RESEND_DOMAIN}>`
                : 'ChartCraft <onboarding@resend.dev>';

            const emailData = await resend.emails.send({
                from: fromEmail,
                to: [email],
                subject: '🎉 Welcome to ChartCraft Waitlist - You\'re In!',
                html: getWelcomeEmailHtml(email),
                text: `Hi there! Thank you for joining the ChartCraft waitlist! We're thrilled to have you as part of our early community. You'll be among the first to experience the future of data visualization when we launch. Expect launch updates, exclusive previews, and early access opportunities soon. Best regards, ChartCraft Team`
            });

            return {
                success: true,
                message: 'Successfully subscribed to waitlist! Check your email for a welcome message.',
                email: email,
                emailId: emailData.data?.id,
                addedToAudience: true,
                audienceId: AUDIENCE_ID
            }

        } catch (emailError) {
            console.error('❌ Failed to send welcome email:', emailError)

            // Даже если письмо не отправилось, считаем подписку успешной
            return {
                success: true,
                message: 'Successfully subscribed to waitlist!',
                email: email,
                emailWarning: 'Welcome email delivery may be delayed',
                addedToAudience: true,
                audienceId: AUDIENCE_ID
            }
        }

    } catch (error) {
        console.error('Subscription error:', error)

        if (error instanceof Error && 'statusCode' in error) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to subscribe. Please try again.'
        })
    }
})
