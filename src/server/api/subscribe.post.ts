import { Resend } from 'resend';
import { getWelcomeEmailHtml } from '../utils/email-template';

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()

        console.log('📧 RESEND_API_KEY status:', config.resendApiKey ? 'SET' : 'NOT SET');
        console.log('🔑 RESEND_DOMAIN status:', config.resendDomain ? 'SET' : 'NOT SET');

        const resend = new Resend(config.resendApiKey);

        const body = await readBody(event)
        const { email } = body

        if (!email) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Email is required'
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid email format'
            })
        }

        const AUDIENCE_ID = config.resendAudienceId || '10e7b202-0604-459a-a7e9-0abaadd10e98'

        try {
            await resend.contacts.create({
                email: email,
                firstName: '',
                lastName: '',
                unsubscribed: false,
                audienceId: AUDIENCE_ID
            })
            console.log('✅ Contact added to audience successfully');
        } catch (audienceError) {
            console.error('❌ Ошибка добавления в аудиторию:', audienceError)
        }

        try {
            const fromEmail = config.resendDomain
                ? `ChartCraft <noreply@${config.resendDomain}>`
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
        console.error('💥 Subscription error:', error)

        if (error instanceof Error && 'statusCode' in error) {
            throw error
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to subscribe. Please try again.'
        })
    }
})
