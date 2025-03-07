import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(recipient_email):
    # Email settings
    sender_email = "mail.com"  # Your email address
    sender_password ="bla vbla bla"  # Load from environment variable  # Your email password (or app-specific password)
    
    subject = "Your Order Has Been Successfully Delivered! 🎉"
    body = """
    Dear Valued Customer,

Great news! Your order has been successfully delivered to your table. 🚀
We hope you love your purchase! If you have any questions or need assistance, feel free to reach out to our support team.

💬 We’d love to hear from you! Let us know about your experience by leaving a review. Your feedback helps us improve and serve you better.

Thank you for choosing us. Let you be the winner 🚀!!

Best regards,
Hackathena Team
📩helpdesk.hackathena25@gmail.com | 📞 +91 8086 350 450
    """

    # Create the email message
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = recipient_email
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))

    try:
        # Set up the server
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()

        # Login to your email account
        server.login(sender_email, sender_password)

        # Send the email
        server.sendmail(sender_email, recipient_email, message.as_string())
        server.quit()

        print(f"Email successfully sent to {recipient_email}")
    except Exception as e:
        print(f"Failed to send email: {e}")

if __name__ == "__main__":
    # Set the recipient's email dynamically
    recipient_email = input("Enter mail to send :")  # Replace with recipient's email
    
    # Send the email
    send_email(recipient_email)
