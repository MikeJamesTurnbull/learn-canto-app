'''
  For more samples please visit https://github.com/Azure-Samples/cognitive-services-speech-sdk
'''

import azure.cognitiveservices.speech as speechsdk
import os
import csv
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get Azure credentials from environment variables
speech_key = os.getenv('AZURE_SPEECH_KEY')
service_region = os.getenv('AZURE_SPEECH_REGION')

if not speech_key or not service_region:
    raise ValueError("Please set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION in your .env file")

speech_config = speechsdk.SpeechConfig(subscription=speech_key, region=service_region)
speech_config.speech_synthesis_voice_name = "zh-HK-HiuMaanNeural"

# Create audio directory if it doesn't exist
audio_dir = "audio"
if not os.path.exists(audio_dir):
    os.makedirs(audio_dir)

# Read the CSV file and process each word
with open('school_words.csv', 'r', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        english_word = row['English']
        chinese_word = row['Chinese']
        
        # Create output filename using English word
        output_filename = os.path.join(audio_dir, f"{english_word.lower()}.mp3")
        
        # Create SSML with slower speech rate
        ssml = f"""<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='zh-HK'>
            <voice name='zh-HK-HiuMaanNeural'>
                <prosody rate='-20%' pitch='0%'>
                    <break time='500ms'/>{chinese_word}<break time='500ms'/>
                </prosody>
            </voice>
        </speak>"""
        
        # Create an audio output config for this file
        audio_config = speechsdk.audio.AudioOutputConfig(filename=output_filename)
        
        # Create the speech synthesizer with the file output config
        speech_synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=audio_config)
        
        # Generate the audio using SSML
        result = speech_synthesizer.speak_ssml_async(ssml).get()
        
        # Check result
        if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
            print(f"Generated audio for {english_word} ({chinese_word}) -> {output_filename}")
        elif result.reason == speechsdk.ResultReason.Canceled:
            cancellation_details = result.cancellation_details
            print(f"Failed to generate audio for {english_word}: {cancellation_details.reason}")
            if cancellation_details.reason == speechsdk.CancellationReason.Error:
                print(f"Error details: {cancellation_details.error_details}")
