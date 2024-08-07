from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = 'your-openai-api-key'

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    user_message = data.get('message')

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=user_message,
        max_tokens=150
    )

    reply = response.choices[0].text.strip()
    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(port=5000)
