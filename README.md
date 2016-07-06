# bits-per-pixel

A little module that outputs a video file's bits-per-pixel value, i.e.:

**video_bitrate / (video_height * video_width * video_fps)**

## How?

```javascript
const bpp = require("./bpp/index.js");
const a = bpp.calculate('/path/to/video.mp4', function (b) {
    setTimeout(function () {
        console.log(b);
        }, 100);
});
```

## Reference

**CNN** maintains its current streams at a bpp of *0.05*.

**ESPN** is known for having a bpp of *0.07* as its baseline standard.

Because Littlstar is `the GOAT`, we will have a bpp baseline of *0.08*. Take that, Disney!
