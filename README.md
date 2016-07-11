# bits-per-pixel

A little module that outputs a video file's bits-per-pixel value, i.e.:

**video_bitrate / (video_height * video_width * video_fps)**

## How?

This module depends upon [FFmpeg](https://www.ffmpeg.org "FFmpeg Project Homepage"). Any recent version should do.

## Installation

```sh
$ npm install bpp
```

## Usage

```javascript
const bpp = require('bpp');
bpp.calculate('/path/to/video.mp4', (result) => {
    console.log(result);
});
```

## API

### bpp.calculate(filePath[, callback]) => Promise

Calculates the **bpp**, *or bits-per-pixel* for a video at a given file path.
It returns an instance of a `Promise` that is rejected when an error occurs, or
resolved with the results of the `calculate()` function.
The `calculate()` function calls the given `callback()` function with the results
as the second argument, if given. If an error occurs, the `callback()` function,
if given, is called with the error as the first argument with `undefined` results.

* `filePath` **required** - The file path for a video to calculate the *bpp*
* `callback` **optional** - The callback function called with results or when an error occurs.

## License

TBA
