// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};









export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};




export const music = async (args: string[]): Promise<string> => {
  return `<p>AI generated Music</p>

    <audio id="audioElement" controls>
        <source src="2.wav" type="audio/wav">
        Your browser does not support the audio element.
    </audio>

    <button id="playButton"></button>
    <button id="pauseButton"></button>

    <script>
        const audioElement = document.getElementById('audioElement');
        const playButton = document.getElementById('playButton');
        const pauseButton = document.getElementById('pauseButton');

        playButton.addEventListener('click', () => {
            audioElement.play();
        });

        pauseButton.addEventListener('click', () => {
            audioElement.pause();
        });


  `;
};


export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};


export const gallery = async (args?: string[]): Promise<string> => {
  return ` <a href="https://example.com" target="_blank">
        <img src="1.png" alt="Preview" width="512" height="512"> <br> <a href="https://example.com" target="_blank">
              <img src="2.png" alt="Preview" width="512" height="512">  `;
};


// Banner
export const banner = (args?: string[]): string => {
  return `
  ██████╗ ██╗████████╗████████╗███████╗██████╗ ██████╗  ██████╗  ██████╗ ████████╗
  ██╔══██╗██║╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝
  ██████╔╝██║   ██║      ██║   █████╗  ██████╔╝██████╔╝██║   ██║██║   ██║   ██║
  ██╔══██╗██║   ██║      ██║   ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██║   ██║   ██║
  ██████╔╝██║   ██║      ██║   ███████╗██║  ██║██║  ██║╚██████╔╝╚██████╔╝   ██║
  ╚═════╝ ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝
 <br>
<p><a href="https://github.com/rustdesk/rustdesk/releases/download/1.2.1/rustdesk-1.2.1-x86_64.exe">Click <span style="text-decoration: underline;">here</span> for remote support</a>
Type Help for a list of commands
<br>


-----------
 ABOUT
 Harrison Weaver
爵 <u><a href="https://github.com/Cipherbunker">Github</a></u>
 Harrisonweaver123@gmail.com
 <u><a href="https://www.linkedin.com/in/harrison-weaver-a53b2385/">linkedin</a></u>


`;
};
