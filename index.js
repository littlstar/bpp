/*jshint node:true */
/*jshint esversion:6*/
/**_________LITTLSTAR/BITS-PER-PIXEL______________
 * BITRATE / (HEIGHT X WIDTH X FPS) calculator
 * @author Andrew Grathwohl <andrew@littlstar.com>
 */
'use strict';

const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfprobePath(process.env.FFPROBE || '/usr/bin/ffprobe');
ffmpeg.setFfmpegPath(process.env.FFMPEG || '/usr/bin/ffmpeg');

exports.calculate = function calcBpp (videoFile) {
    ffmpeg.ffprobe(videoFile, function(err, metadata) {
        const height = metadata.streams[0].height;
        const width  = metadata.streams[0].width;
        const fpsVal = metadata.streams[0].r_frame_rate.split('/');
        const bits   = metadata.streams[0].bit_rate;
        const fps = parseFloat(fpsVal[0]) / parseFloat(fpsVal[1]);
        const bpp = bits / (height * width * fps);
        console.log('Bits per pixel: ' + bpp.toFixed(3));
        return bpp;
    });
};
