import fs from 'fs';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const DIARY_FILE = 'diary.txt';

async function writeToDiary() {
  try {
    const entry = await rl.question('Enter your diary entry: ');
    const timestamp = new Date().toLocaleString();
    const entryWithDate = `[${timestamp}] ${entry}\n`;
    fs.appendFile(DIARY_FILE, entryWithDate, (err) => {
      if (err) {
        console.error('Error writing to diary:', err);
      } else {
        console.log('Your entry has been saved!');
      }
    });
  } catch (err) {
    console.error('Error writing to diary:', err);
  }
}

async function readDiary() {
  try {
    fs.readFile(DIARY_FILE, 'utf8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          console.log('Diary is empty or does not exist yet.');
        } else {
          console.error('Error reading the diary:', err);
        }
      } else {
        if (data) {
          console.log('\nDiary Entries:\n');
          console.log(data);
        } else {
          console.log('Diary is empty.');
        }
      }
    });
  } catch (err) {
    console.error('Error reading the diary:', err);
  }
}

async function askForAction() {
  try {
    const answer = await rl.question('Do you want to (R)ead or (W)rite in your diary? ');

    if (answer.toUpperCase() === 'W') {
      await writeToDiary();
    } else if (answer.toUpperCase() === 'R') {
      await readDiary();
    } else {
      console.log('Invalid choice. Please enter "R" to read or "W" to write.');
      await askForAction();
    }
  } catch (err) {
    console.error('Error in asking the question:', err);
  } finally {
    rl.close();
  }
}

askForAction();
