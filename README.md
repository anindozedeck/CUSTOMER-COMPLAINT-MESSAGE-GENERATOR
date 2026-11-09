# ReplyWell

**Live URL:** https://replywell.onrender.com

ReplyWell helps small Nairobi businesses respond to customer complaints with care. Paste a complaint from a shop, courier, Airbnb, or restaurant customer and select **Generate reply** to get a professional draft that acknowledges the issue and suggests a clear next step. It avoids blame and unsupported promises. Review and personalize the draft before sending.

Complaint text is sent to Anthropic for drafting; avoid entering payment details or other sensitive information.

## Run locally

1. Install dependencies with `pip install -r requirements.txt`.
2. Set `ANTHROPIC_API_KEY` in your environment or in a local `.env` file. Never commit the key.
3. Run `python Day20_exercise.py` and open `http://localhost:5000`.

## Deploy to Render

This project includes a `render.yaml` Blueprint. Connect the Git repository to Render, create the Blueprint service, and provide `ANTHROPIC_API_KEY` in the Render dashboard. Render will display the public service URL after deployment.

## Branded version pricing

I would charge **KES 25,000** as a one-time setup for a branded version for one business, including its logo and colors, tailored response tone, deployment, and handover. Ongoing AI usage would be billed separately at cost.
