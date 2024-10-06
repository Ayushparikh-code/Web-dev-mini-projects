# AI Chatbot with Gemini API by Anoop 2005

Welcome to the AI Chatbot project powered by the Gemini API! This README will guide you through the setup, features, and usage of our chatbot that incorporates both Optical Character Recognition (OCR) and conversational capabilities.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Conversational AI**: Engage with users through natural language processing, providing answers to queries and managing conversations.
- **Optical Character Recognition (OCR)**: Extract text from images, enabling the chatbot to interact with visual data.
- **Multi-Functional Interface**: Seamlessly switch between chatting and OCR processing.
- **Customizable Responses**: Modify and enhance response patterns based on user needs.

## Requirements

Before you begin, ensure that you have the following installed on your machine:

- Python 3.7 or higher
- pip (Python package installer)
- An active account with Gemini API

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ai-chatbot-gemini.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-chatbot-gemini
   ```

3. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up your API key:

   Create a `.env` file in the root of the project with the following content:

   ```
   GEMINI_API_KEY=your_api_key_here
   ```

## Usage

To run the chatbot, execute the following command in the terminal:

```bash
python chatbot.py
```

Once running, you will be prompted to input either text for conversation or upload an image for OCR processing. The chatbot will automatically detect your input type and respond accordingly.

### Chat Mode

Type your message, and the bot will generate a response using the Gemini API.

### OCR Mode

Upload an image, and the bot will process the image to extract text using OCR capabilities, then display the extracted text.

## Configuration

You can customize various elements of the chatbot, such as:

- **Response Patterns**: Modify response templates in the `responses.json` file.
- **OCR Settings**: Adjust OCR processing parameters in the `ocr_config.py` file.

## Contributing

We welcome contributions! If you’d like to help improve the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

We hope you find this AI Chatbot helpful for your needs! If you have any questions or issues, please open an issue in the repository. Happy chatting!
