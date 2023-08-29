// Include the socket.io library
const script = document.createElement('script');
script.src = "https://cdn.socket.io/4.0.0/socket.io.min.js";
document.head.appendChild(script);

// Wait for the script to load
script.onload = () => {
    // Connect to the socket
    const socket = io('wss://solgames.io', {
        transports: ['websocket']
    });

    const webhookURL = 'YOUR_WEBHOOK_URL_HERE';

    socket.on('connect', () => {
        console.log('Connected to solgames.io');
    });

    socket.on('roulette-started', (data) => {
        const color = data.color;
        const number = data.number;

        let colorCode;
        switch (color) {
            case 'red':
                colorCode = '#DF354E';
                break;
            case 'black':
                colorCode = '#26404F';
                break;
            default:
                colorCode = '#07C287';
                break;
        }

        const payload = {
            "embeds": [{
                "title": "What will the next **Roulette** spin be?",
                "description": `Colour: ${color}\nNumber: \`${number}\`\n\n[Enter now!](https://solgames.io/)`,
                "color": parseInt(colorCode.replace('#', ''), 16),
                "author": {
                    "name": "Solgames Predictor",
                    "icon_url": "https://media.discordapp.net/attachments/1146157162746347611/1146157219805667391/Group_1.png",
                },
                "footer": {
                    "text": "Solgames Predictor",
                    "icon_url": "https://media.discordapp.net/attachments/1146157162746347611/1146157219805667391/Group_1.png",
                },
            }]
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Webhook Response:', data);
        })
        .catch((error) => {
            console.error('Webhook Error:', error);
        });
    });
};
