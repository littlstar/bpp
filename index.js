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

/**
 * Calculates the bpp, or bits-per-pixel for a video at a given file path.
 * The calculate() function calls the given callback() function with the
 * results as the second argument. If an error occurs, the callback()
 * function is called with the error as the first argument with undefined
 * results.
 * 
 * @param {String} filePath - The file path for a video to calculate the bpp
 * @param {Function} [callback] - The callback function called with results
 *                                or when an error occurs.
 * @return {Promise}
 */
 
exports.calculate = (videoFile, cb) => new Promise((resolve, reject) => {
    try { ffmpeg.ffprobe(videoFile, onprobe); }
    catch (err) { return cb(err); }
    
    // handle a given callback and promise resolution
    function done(err, results) {
        if (cb) {
            if (err) { cb(err); }
            else { cb(null, results); }
        }
        
        if (err) { reject(err); }
        else { resolve(results); }
    }
    
    // handle ffprobe errors or results
    function onprobe(err, metadata) {
        if (err) { return done(err); }
        const height = metadata.streams[0].height;
        const width  = metadata.streams[0].width;
        const fpsVal = metadata.streams[0].r_frame_rate.split('/');
        const bits   = metadata.streams[0].bit_rate;
        const fps = parseFloat(fpsVal[0]) / parseFloat(fpsVal[1]);
        const bpp = bits / (height * width * fps);
        done(null, bpp);
    }
});
