# Solgames Roulette infos

A simple script to send the result of the next Roulette spin on Solgames.io and send it to a Discord channel using a webhook.

![Example Output](example.PNG)

## Note

The information provided by this script does not affect gameplay as you cannot enter after you get the info. It is for informational purposes only.

## How To Use

1. Open your web browser and go to [Solgames.io](https://solgames.io/).

2. Open the Developer Tools by pressing `F12` or `Right Click` -> `Inspect`.

3. Navigate to the `Console` tab in the Developer Tools.

4. Copy the script from the `script.js` file.

5. Replace `'YOUR_WEBHOOK_URL_HERE'` in the script with your actual Discord webhook URL.

6. Paste the script into the console and press `Enter`.

7. The script will now run and send the results of the next Roulette spin to your Discord channel.

## Embed Colors

The embed messages sent to Discord will have the following colors based on the result:

- Red: `#DF354E`
- Black: `#26404F`
- Green: `#07C287`

## Console Script

If you don't want the info to be sent to your discord webhook, you can use the following script:

```javascript
const script = document.createElement('script');
script.src = "https://cdn.socket.io/4.0.0/socket.io.min.js";
document.head.appendChild(script);

script.onload = () => {
    const socket = io('wss://solgames.io', {
        transports: ['websocket']
    });

    socket.on('roulette-started', (data) => {
        const color = data.color;
        const number = data.number;
        console.log(data);     
    });
};
```
Just simply paste it into your console (You can see how to open the console in the How to use steps 1-3)

## Author

[ceodavee](https://github.com/ceodavee)
