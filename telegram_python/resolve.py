from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, ContextTypes, ConversationHandler, filters
import logging
import json
import os

# Replace this with your actual Telegram bot token
TELEGRAM_BOT_TOKEN = "token"
USERS_FILE = "users_core.json"  # File to store user chat IDs

# Enable logging (useful for debugging)
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
logger = logging.getLogger(__name__)

# Conversation states
EMAIL = 1

# ✅ Load stored users from file
def load_users():
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, "r") as f:
            return json.load(f)
    return []

# ✅ Save user chat IDs to file
def save_users(users):
    with open(USERS_FILE, "w") as f:
        json.dump(users, f)

# ✅ Handle "/start" command (Save user chat ID)
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.message.chat_id
    users = load_users()

    if chat_id not in users:
        users.append(chat_id)
        save_users(users)
        logger.info(f"New user added: {chat_id}")

    await update.message.reply_text("🤖 Bot is online! You'll now receive updates.")

# ✅ Handle "/resolved" command - Ask for email
async def resolved(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("📧 Please enter participants email:")
    return EMAIL  # Move to next step

# ✅ Handle user response with email
async def get_email(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    email = update.message.text  # Get email input

    message = f"✅ Order Resolved by: {user.first_name} (@{user.username})\n📧 Email: {email}"
    
    users = load_users()  # Load all users
    if not users:
        await update.message.reply_text("⚠️ No users found to send the update.")
        return ConversationHandler.END

    for chat_id in users:
        try:
            await context.bot.send_message(chat_id, message)
        except Exception as e:
            logger.error(f"Failed to send message to {chat_id}: {e}")

    await update.message.reply_text("✅ Message sent to all users!")
    return ConversationHandler.END  # End conversation

# ✅ Handle user canceling input
async def cancel(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("❌ Email input canceled.")
    return ConversationHandler.END

# ✅ Start the bot
def main():
    app = Application.builder().token(TELEGRAM_BOT_TOKEN).build()

    # Command handlers
    app.add_handler(CommandHandler("start", start))

    # Conversation Handler for /resolved
    conv_handler = ConversationHandler(
        entry_points=[CommandHandler("resolved", resolved)],
        states={EMAIL: [MessageHandler(filters.TEXT & ~filters.COMMAND, get_email)]},
        fallbacks=[CommandHandler("cancel", cancel)]
    )
    app.add_handler(conv_handler)

    logger.info("✅ Bot is running...")
    app.run_polling()

if __name__ == "__main__":
    main()
