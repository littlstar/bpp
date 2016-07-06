# bits-per-pixel

A little module that outputs a video file's bits-per-pixel value, i.e.:

**bits_in_video / (video_height * video_width * video_fps)**

## How?

```bash
node index.js /path/to/video.mp4 # => 0.87
```

## Reference

**CNN** maintains its current streams at a bpp of *0.5*.

**ESPN** is known for having a bpp of *0.7* as its baseline standard.

Because Littlstar is `the GOAT`, we will have a bpp baseline of *0.8*. Take that, Disney!
