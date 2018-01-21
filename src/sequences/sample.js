const sequence = {
  "title" : "Sample Steps Sequence",
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
};
export default sequence;
