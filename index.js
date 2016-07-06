/*jshint node:true */
/*jshint esversion:6*/
/**_________LITTLSTAR/BITS-PER-PIXEL______________
 * BITRATE / (HEIGHT X WIDTH X FPS) calculator
 * @author Andrew Grathwohl <andrew@littlstar.com>
 */
'use strict';

const video = process.argv[2];
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfprobePath(process.env.FFPROBE || '/usr/bin/ffprobe');
ffmpeg.setFfmpegPath(process.env.FFMPEG || '/usr/bin/ffmpeg');

// Metadata process (10 concurrent workers)
ffmpeg.ffprobe(video, function(err, metadata) {
    const streams = metadata.streams;
    let streamData = {};
    for (let stream in streams) {
        for (let field in streams[stream]) {
            if (field == 'codec_type') {
                streamData[streams[stream][field]] = streams[stream];
            }
        }
    }
    const height = streams[0].height;
    const width  = streams[0].width;
    const fpsVal = streams[0].r_frame_rate.split('/');
    const bits   = streams[0].bit_rate;
    const fps = parseFloat(fpsVal[0]) / parseFloat(fpsVal[1]);
    const bpp = bits / (height * width * fps);
    console.log('Bits per pixel: ' + bpp.toFixed(3));
});
