# Streamlabs Start Credits

This extension helps automatically locate and click the 'Roll Credits Live' button for the End Credits Widget on streamlabs.com.

## How to use

1. [Install the extension on Firefox](https://addons.mozilla.org/en-US/firefox/addon/roll-credits-live-for-slobs/)
2. Set up your streaming workflow to launch one of the following URLs when you wish to have your Twitch stream credits roll live via Streamlabs.com (hint: you can use a macro hotkey, or a browser bookmark)
    - Test Roll Credits: <https://streamlabs.com/dashboard#/credits?test=true>
    - Roll Credits Live: <https://streamlabs.com/dashboard#/credits?activate=true>

## FAQ and Troubleshooting

Q: My credits won't roll!  
A: Ensure you have "Enable Custom HTML/CSS" disabled.

## How to develop

1. Download this repository as a zip and save it somewhere
2. Go to Firefox Add-ons Debugger `about:debugging#/runtime/this-firefox`
3. Click on 'Load Temporary Add-on' and select the zip you downloaded from step 1
4. Try it out by navigating to either:
   - Test Roll Credits: <https://streamlabs.com/dashboard#/credits?test=true>
   - Roll Credits Live: <https://streamlabs.com/dashboard#/credits?activate=true>
