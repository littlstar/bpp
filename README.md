# bits-per-pixel

A little module that outputs a video file's bits-per-pixel value, i.e.:

**video_bitrate / (video_height * video_width * video_fps)**

## How?

First, do `npm install --save littlstar/bpp.git`.

Then:

```javascript
const bpp = require("./bpp/index.js");
const a = bpp.calculate('/path/to/video.mp4', function (b) {
    setTimeout(function () {
        console.log(b);
        }, 100);
});
```
