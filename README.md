<p align="center">
    <a href="https://discord.gg/VKJeg6nvSH">
  <img src="https://i.imgur.com/1XJhQBe.png"/>
    </a>
</p>

## GitHub Contribution Script

I am posting this for educational purposes only.  
I don't recommend you to do this to get an unfair advantage over others.

###### Before you continue:
- Make sure you have installed [NPM](https://www.npmjs.com/get-npm).
- Make sure you have a code editor, I recommend [Visual Studio Code](https://code.visualstudio.com/).
- Have a basic understanding of JavaScript and GitHub.

###### Required packages:
- `jsonfile`
- `moment`
- `simple-git`
- `random`

### Installation:
    git clone git@github.com:armfxl/contribution-script.git

### Example Usage:

###### Make contributions in the past:
You can make contribution requests in the **past**, meaning can have contributions before you even joined GitHub.

```js
    // change x to get a random number between 0-100,
    const x = random.int(0, 100);
    const y = random.int(0, 7);

    // get random date and define data.
    const date = moment()
        // subtract 'x' years from your contribution date.
        .subtract(x, 'y').add(1, 'd')
        .add(x, 'w').add(y, 'd').format();
    const data = {
        date: date,
        text: 'made by armful#0001'
    }
```

---

### Q: How do I use this?
A: If you don't know how to work this then you shouldn't be messing with it. But here's a how-to regardless.
1. Make a new private repository and clone it using `SSH`.
2. Within your cloned repository make two new files, `index.js` and `data.json`.
3. Use the source provided in `index.js` and replace `100` on line **11** with the amount of requests you want to make.

Example:
```js
// this will send 500 contributions.
let requests = 500;

// this will send 10 contributions.
let requests = 10;
```

4. Type `node index` in your terminal.

---

### Q: Can this get me banned?
A: Honestly, I have no idea. I'm not responsible for anyone using this for an unfair advantage. Use this at your own risk.

---

### Q: Why are you releasing this?
A: I was bored and figured why not, enjoy.

<p align="center">
  <a href="https://discord.gg/VKJeg6nvSH">
  <img src="https://i.imgur.com/HWF3UoH.png"/>
  </a>
</p>
