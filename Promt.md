### **Project Title: POC for "ShopEZ" - A Voice-Driven E-commerce AI Assistant**

### **1. Project Overview**

The goal is to build a Proof of Concept for a web application featuring a voice-controlled AI assistant. The project consists of two main parts:

1.  **Frontend:** A React-based e-commerce website for a store named "ShopEZ". It will display products, offers, and contact information. It must also host the user-facing interface for the AI assistant.
2.  **Backend:** A Python-based voice agent powered by `livekit-agents`. The agent, named "Mai," will understand Vietnamese, answer user queries about the store, and be able to navigate the user around the website by issuing commands.

### **2. Core Technologies**

*   **Frontend:**
    *   Framework: React with TypeScript
    *   Build Tool: Vite
    *   Styling: Tailwind CSS
    *   UI Components: `shadcn/ui`
    *   Routing: `react-router-dom`
    *   Real-time Communication: LiveKit Web SDK
*   **Backend:**
    *   Framework: `livekit-agents` (Python)
    *   AI Services:
        *   Speech-to-Text (STT): OpenAI (configured for Vietnamese)
        *   Language Model (LLM): OpenAI compatible
        *   Text-to-Speech (TTS): OpenAI
    *   Visuals: Integration point for a `bithuman` avatar.

---

### **3. Frontend Requirements (website folder)**

Please generate a React application with the following structure and components.

**3.1. Folder Structure:**

```
/src
├── App.tsx
├── main.tsx
├── index.css
├── assets/
│   └── (placeholder images for products)
├── components/
│   ├── ai_avatar/
│   │   ├── LiveKitWidget.jsx
│   │   └── AvatarVoiceAgent.jsx
│   └── ui/
│       └── (scaffold shadcn/ui components: Button, Card, etc.)
└── pages/
    └── Index.tsx
```

**3.2. App.tsx:**

*   Set up `react-router-dom`.
*   Define a single root route `/` that renders the `Index` page.

**3.3. Index.tsx (The Main Page):**

This page is the storefront for "ShopEZ". It should be a single-page layout with scrollable sections.

*   **Navbar:**
    *   Title: "ShopEZ"
    *   Navigation links pointing to anchors: `Trang chủ` (#home), `Sản phẩm` (#products), `Ưu đãi` (#offers), `Bán chạy` (#bestsellers), `Liên hệ` (#contact).
*   **Hero Section (`#home`):**
    *   Headline: "Mua sắm dễ dàng, giá tốt mỗi ngày" (Easy shopping, great prices every day).
    *   Sub-headline: "Khám phá hàng ngàn sản phẩm chất lượng, giao hàng nhanh chóng" (Discover thousands of quality products, fast delivery).
*   **Featured Products Section (`#products`):**
    *   Title: "Sản phẩm nổi bật" (Featured Products).
    *   Display at least 3 product cards with a placeholder image, title (e.g., "Tai nghe Bluetooth"), price (e.g., "₫450.000"), and an "Add to Cart" button.
*   **Special Offers Section (`#offers`):**
    *   Title: "Ưu đãi đặc biệt" (Special Offers).
    *   Display 3 offer cards (e.g., "Giảm 20% đơn hàng đầu tiên", "Mua 1 tặng 1", "Freeship toàn quốc").
*   **Best Sellers Section (`#bestsellers`):**
    *   Title: "Sản phẩm bán chạy" (Best Sellers).
    *   Display at least 4 smaller product cards with a placeholder image, title, and price.
*   **Contact Section (`#contact`):**
    *   Title: "Liên hệ" (Contact).
    *   Display contact information: Phone (`0123 456 789`), Email (`support@shopez.vn`), and Address (`123 Đường ABC, Hà Nội`).
*   **AI Agent Widget:**
    *   Integrate the `LiveKitWidget` component. It should be fixed on the screen (e.g., bottom-right corner) so the user can interact with the AI from anywhere on the page.

**3.4. `components/ai_avatar/`:**

*   **`LiveKitWidget.jsx`:** This component is responsible for connecting to the LiveKit room, handling the audio/video streams, and displaying the `AvatarVoiceAgent`.
*   **AvatarVoiceAgent.jsx:** This component will render the visual avatar video stream received from the backend and include UI controls (like mute/unmute).

---

### **4. Backend Requirements (backend folder)**

Please generate a Python application using the `livekit-agents` framework.

**4.1. Folder Structure:**

```
/
├── agent.py
├── prompts.py
├── tools.py
└── requirements.txt
```

**4.2. agent.py (Main Agent Logic):**

*   Define an `Assistant` class that inherits from `livekit.agents.Agent`.
*   In its `__init__`, initialize it with the `AGENT_INSTRUCTION` from prompts.py and the `open_url` tool from `tools.py`.
*   Create an `entrypoint` function that sets up an `AgentSession`.
*   Configure the `AgentSession` with:
    *   `stt`: `openai.STT(language="vi")`
    *   `llm`: `openai.LLM()`
    *   `tts`: `openai.TTS()`
    *   `vad`: `silero.VAD()`
*   Instantiate the `Assistant` agent.
*   Set up the `bithuman.AvatarSession` to connect the agent's audio output to a visual avatar.
*   Use the standard `livekit.agents.cli` to run the agent.

**4.3. `tools.py` (Agent Capabilities):**

*   Define a single asynchronous tool function: `open_url(url: str)`.
*   This function's purpose is to signal the frontend to navigate. For this POC, it can simply log the URL it was asked to open. The actual communication will be handled by the agent framework sending a tool call message to the frontend.
*   Decorate it with `@agent_tool` to make it available to the LLM.

**4.4. prompts.py (The Agent's "Brain"):**

This file contains the core instructions for the LLM.

*   **`AGENT_INSTRUCTION` (string variable):**
    *   **Persona:** "You are Mai, a friendly and helpful AI sales assistant for an online store called ShopEZ."
    *   **Task:** "Your primary goal is to assist users by answering their questions about products, promotions, and store information. You must also help them navigate the website using your available tools."
    *   **Tool Usage Instructions:**
        *   "You have a tool called `open_url` to navigate the user to different parts of the website."
        *   "When a user asks to see products, call `open_url` with the URL argument `'#products'`."
        *   "When a user asks about special offers or promotions, call `open_url` with the URL argument `'#offers'`."
        *   "When a user asks to see the best-selling items, call `open_url` with the URL argument `'#bestsellers'`."
        *   "When a user asks for contact information, call `open_url` with the URL argument `'#contact'`."
        *   "Before using the tool, inform the user what you are about to do. For example: 'Certainly, I'll take you to our products section now.'"
    *   **Language Constraint:** "You must always respond in Vietnamese."

### **5. Final Instructions**

*   Generate the complete code for all the files mentioned above based on these requirements.
*   Populate `requirements.txt` with the necessary Python libraries (`livekit-agents`, `python-dotenv`, etc.).
*   For the frontend, provide the `package.json` dependencies (`react`, `react-dom`, `tailwindcss`, `lucide-react`, `react-router-dom`, `@livekit/components-react`, etc.).
*   The result should be a runnable Proof of Concept that demonstrates the core interaction between the user, the website, and the voice AI.