# Steps: Custom Sequences
An app that lets you run through a sequence of steps.

## Demo
[Live Demo](https://steps-sequences-demo.firebaseapp.com/)

## Background
I was trying to do a meditation exercise. The exercise had a number of steps, each a minute long. My first time doing the routine, I had to keep resetting a timer on my phone every minute and it was incredibly distracting so I thought I'd build an app that managed the routine for me.

The very next day, I was using a workout app that said the name of exercise, began a timer, counted down until the time was up, and then offered up the next exercise. This use case was different but I knew an app could be built to handle this use case as well as many others.

And so "Steps" was born...

## Installation
Simply run `npm install` and then `npm run start`. The app should be available at http://localhost:3000/.

## Building
Run `npm run build`. This will create a build in the `/build` folder.

## Custom Routines

Any routine can be created using the JSON format below. Take note of the `timing` object.

```
"timing" : {
  "type": "", // Valid values are either 'manual', 'timer', or 'manualTimer' (required)
  "duration": 0, // Integer defining the length of the step in seconds (required for either timer option)
}
```
In order to create your own, either edit `sample.json` or create your own json and change the path in `src/components/Steps.js`.

Sample routine JSON (provided also in `src/sequences/sample.json`):

```json
{
  "title" : "Steps: Sample Sequence",
  "description": "This description is currently only used for documentation purposes.",
  "steps" : [
    {
      "title": "Step 1: Begin",
      "description": "This description should describe what this step is about. It has a manual 'Next' button.",
      "timing": {
        "type": "manual"
      }
    },
    {
      "title": "Step 2: Do Something",
      "description": "This description should describe what this step is about. This has a timer of an alotted number of seconds and then automatically advances to the next step.",
      "timing": {
        "type": "timer",
        "duration": 3
      }
    },
    {
      "title": "Step 3: Do Something",
      "description": "This description should describe what this step is about. It has a timer and then a manual 'Next' button.",
      "timing": {
        "type": "manualTimer",
        "duration": 3
      }
    },
    {
      "title": "The End!",
      "description": "Having a \"The End\" step is actually important as the last step always presents the reset button.",
      "timing": {
        "type": "end"
      }
    }
  ]
}
```

## Issues
* No audio

## Future Features
* Background music selection
* Management screen
* Adapting this for a Google Action/Alexa Skill (would be difficult for the next steps invoked manually)
* Creating a sequence with a GUI instead of relying on JSON

## License
MIT License

Copyright (c) 2018 Jason Lutterloh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
