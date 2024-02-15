# Discord Kaktus Dobíječka Notification Project

This project aims to notify you on Discord whenever a new event is happening on the Kaktus Dobíječka website.

## Prerequisites

Before running this project, make sure you have the following:

- Node.js and npm installed on your machine.
- Discord account and a server where you have administrative privileges.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd discordKaktus`.
3. Install the dependencies: `npm install discord.js axios`.

## Configuration

1. Create a new Discord bot on the Discord Developer Portal.
2. Create a `config.json` file and paste this code in:
```
{
	"token": "YOUR_TOKEN_HERE"
}
```
3. Copy the bot token and replace "YOUR_TOKEN_HERE" in the `config.json` file with the actual bot token.
4. Replace the UserID with your Discord user ID in the `index.js` file.
5. You can also adjust the site change check delay to your liking.

## Usage

Just run this program on your server
