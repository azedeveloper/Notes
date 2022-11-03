[AzE's Note Website](https://azenotes.vercel.app)
======


![Notes](https://i.ibb.co/hKN9NGs/notes.png)

About
------
This is a note website where you can make your own notes, It was made using HTML, CSS and JavaScript in just a day. So you can expect some bugs and bad code.

Features
------

- Sticky Notes
- Edit/Delete Notes
- Dark Mode


Security
------
This site does not publish any of your notes to the internet. **All of the notes are saved in your browsers local storage** 🌐

The notes are saved like this:
```
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
```

This means that using something like **incognito mode** won't save your notes. 🕵️


Mobile Compatibility 
------
The mobile version of the site is currently still being worked on. It might work on mobile but not looks the best.📱


Known Issues 🛑
------

- **The dark/light mode might be broken if you have dark mode on phone.** 

- **On some devices the add notes button might be wider than usual.**

