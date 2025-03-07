import requests
import json

# Replace with your bot token
BOT_TOKEN = "token"

# Path to store user chat IDs
USER_DATA_FILE = "users.json"

def load_users():
    """ Load user chat IDs from the JSON file. """
    try:
        with open(USER_DATA_FILE, "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def save_users(users):
    """ Save user chat IDs to the JSON file. """
    with open(USER_DATA_FILE, "w") as file:
        json.dump(users, file)

def send_message(chat_id, text):
    """ Send a message to a specific Telegram user. """
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {"chat_id": chat_id, "text": text, "parse_mode": "Markdown"}
    response = requests.post(url, data=payload)
    return response.json()

def start_bot():
    """ Function to register users when they start the bot. """
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/getUpdates"
    response = requests.get(url).json()

    users = load_users()
    for update in response.get("result", []):
        if "message" in update and "chat" in update["message"]:
            chat_id = update["message"]["chat"]["id"]
            if chat_id not in users:
                users.append(chat_id)

    save_users(users)

def broadcast_message():
    """ Broadcast a message to all users who started the bot. """
    title = input("Enter Title: ")
    desc = input("Enter Description: ")
    link = input("Enter Link: ")

    message = f"*{title}*\n{desc}\n({link})"
    #[Read more]

    users = load_users()
    if not users:
        print("No users have started the bot yet.")
        return

    for user in users:
        send_message(user, message)

if __name__ == "__main__":
    start_bot()  # Register new users
    broadcast_message()  # Send message to all users
