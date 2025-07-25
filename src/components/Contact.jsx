import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with pre-filled content
    const { name, email, subject, message } = formData
    
    const emailSubject = subject || 'Contact from Portfolio'
    const emailBody = `Hi Khoa,

My name is ${name}.

${message}

Best regards,
${name}
${email ? `\nEmail: ${email}` : ''}`
    
    const mailtoLink = `mailto:lnanhkhoa303@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    
    // Open user's email client
    window.location.href = mailtoLink
    
    // Reset form after opening email client
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">lnanhkhoa303@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">+84 39 996 4550</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Ho Chi Minh City, Vietnam</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/lnanhkhoa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors duration-200"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/lnanhkhoa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors duration-200"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
