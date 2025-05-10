# Cantonese Flashcard PWA

A Progressive Web Application for learning Cantonese through interactive flashcards with audio pronunciations. The app displays Jyutping (pronunciation), English translations, and Chinese characters with authentic Cantonese audio using Azure Text-to-Speech.

## Features

- 📝 Flashcard-based learning interface
- 🔊 Audio pronunciations using Azure TTS
- 🌐 Progressive Web App (PWA) support for offline use
- ⌨️ Keyboard navigation support
- 📱 Responsive design for mobile and desktop
- 🔄 Flip cards to reveal English/Chinese translations

## Getting Started

### Prerequisites

- Python 3.x
- A modern web browser (Chrome, Firefox, Edge, etc.)
- Azure Text-to-Speech API key (for generating new audio files)

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
```powershell
cd path/to/canto-app
```
3. Start the local server:
```powershell
python server.py
```
4. Open your web browser and visit:
```
http://localhost:8000
```

### Usage

- Click the play button (▶️) to hear the Cantonese pronunciation
- Click "Flip Card" or press spacebar to reveal the English translation and Chinese characters
- Use arrow keys or navigation buttons to move between cards
- Install as a PWA through your browser for offline access

## Project Structure

```
canto-app/
├── audio/              # Audio files for pronunciations
├── app.js             # Main application logic
├── index.html         # Main HTML file
├── styles.css         # CSS styles
├── manifest.json      # PWA manifest
├── service-worker.js  # Service worker for PWA functionality
├── server.py         # Local development server
├── generate_cantonese_azure_tts.py  # Audio generation script
└── words.csv         # Vocabulary database
```

## Future Development Ideas

1. **Enhanced Learning Features**
   - Add spaced repetition system (SRS)
   - Implement progress tracking
   - Add a favorites/bookmark system
   - Include practice mode with randomized cards

2. **Content Improvements**
   - Add more vocabulary categories
   - Include example sentences
   - Add tone markers to Jyutping
   - Include traditional and simplified characters

3. **Technical Enhancements**
   - Add a backend database for user progress
   - Implement user accounts
   - Add analytics for learning patterns
   - Create a mobile app version

4. **User Interface**
   - Add dark mode support
   - Implement different card themes
   - Add animations for card transitions
   - Create a search/filter system

5. **Audio Features**
   - Add speech recognition for practice
   - Include different voice options
   - Add slow playback option
   - Implement batch audio download

## Contributing

Feel free to submit issues and enhancement requests. Here are some ways you can contribute:

- Add more vocabulary words to `words.csv`
- Improve the UI/UX design
- Add new features
- Fix bugs
- Improve documentation

## Technical Details

### Audio Generation

The project uses Azure Cognitive Services Text-to-Speech to generate Cantonese pronunciations. To generate new audio files:

1. Update `words.csv` with new vocabulary
2. Configure your Azure credentials in `generate_cantonese_azure_tts.py`
3. Run the script to generate new audio files:
```powershell
python generate_cantonese_azure_tts.py
```

### PWA Support

The application includes:
- Service worker for offline functionality
- Web manifest for installation
- Cache management for assets and audio files

## License

[MIT License](https://opensource.org/licenses/MIT)

## Acknowledgments

- Azure Cognitive Services for Text-to-Speech
- Contributors to the Cantonese learning community
- Open source projects that inspired this work
