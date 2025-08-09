# ShopEZ + Mai Voice Agent (PoC)

Monorepo style structure containing:

- `website/` React + Vite + Tailwind storefront with embedded LiveKit widget.
- `backend/` Python `livekit-agents` based voice assistant named *Mai*.

## Frontend (website)

Install & run:

```bash
npm install
npm run dev
```

Configure environment variables (create `website/.env`):
```
VITE_LIVEKIT_URL=wss://your.livekit.server
```
Token fetch is mocked inside `LiveKitWidget.jsx` (replace with real backend endpoint).

## Backend (agent)

Create virtual env & install:

```bash
python -m venv .venv
.venv/Scripts/activate  # Windows PowerShell: .venv\Scripts\Activate.ps1
pip install -r backend/requirements.txt
```

Run agent (make sure LIVEKIT keys & OpenAI keys are in environment if required by livekit-agents version):
```bash
python backend/agent.py
```

## Tooling
The agent exposes a single tool `open_url` which the LLM can call to instruct the frontend to navigate user to a section anchor.

## Notes
- Avatar integration (`bithuman.AvatarSession`) is placeholder wiring.
- Replace dummy LiveKit token logic with secure server generated tokens.
- All assistant responses are in Vietnamese as per prompt.
