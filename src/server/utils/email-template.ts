import { readFileSync } from 'fs'
import { resolve } from 'path'

export function getWelcomeEmailHtml(email: string): string {
    try {
        const templatePath = resolve(process.cwd(), 'src/server/templates/welcome-email.html')
        let template = readFileSync(templatePath, 'utf-8')
        template = template.replace('{{email}}', email)
        return template
    } catch (error) {
        console.error('❌ Error loading email template:', error)
        return `
      <h1>🎉 Welcome to ChartCraft!</h1>
      <p>Hi there! Thank you for joining our waitlist.</p>
      <p>We'll notify you when ChartCraft launches!</p>
    `
    }
}
