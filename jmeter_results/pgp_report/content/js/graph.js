/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 57.0, "minX": 0.0, "maxY": 674.0, "series": [{"data": [[0.0, 57.0], [0.1, 58.0], [0.2, 58.0], [0.3, 59.0], [0.4, 61.0], [0.5, 61.0], [0.6, 61.0], [0.7, 61.0], [0.8, 62.0], [0.9, 63.0], [1.0, 66.0], [1.1, 71.0], [1.2, 71.0], [1.3, 72.0], [1.4, 72.0], [1.5, 72.0], [1.6, 73.0], [1.7, 77.0], [1.8, 82.0], [1.9, 85.0], [2.0, 86.0], [2.1, 87.0], [2.2, 87.0], [2.3, 92.0], [2.4, 99.0], [2.5, 99.0], [2.6, 118.0], [2.7, 119.0], [2.8, 120.0], [2.9, 120.0], [3.0, 120.0], [3.1, 120.0], [3.2, 121.0], [3.3, 121.0], [3.4, 122.0], [3.5, 123.0], [3.6, 129.0], [3.7, 130.0], [3.8, 131.0], [3.9, 132.0], [4.0, 132.0], [4.1, 133.0], [4.2, 134.0], [4.3, 141.0], [4.4, 144.0], [4.5, 145.0], [4.6, 145.0], [4.7, 147.0], [4.8, 149.0], [4.9, 149.0], [5.0, 159.0], [5.1, 169.0], [5.2, 172.0], [5.3, 174.0], [5.4, 174.0], [5.5, 177.0], [5.6, 177.0], [5.7, 188.0], [5.8, 188.0], [5.9, 190.0], [6.0, 195.0], [6.1, 195.0], [6.2, 196.0], [6.3, 196.0], [6.4, 196.0], [6.5, 197.0], [6.6, 197.0], [6.7, 197.0], [6.8, 198.0], [6.9, 208.0], [7.0, 211.0], [7.1, 216.0], [7.2, 217.0], [7.3, 222.0], [7.4, 223.0], [7.5, 228.0], [7.6, 229.0], [7.7, 229.0], [7.8, 233.0], [7.9, 237.0], [8.0, 243.0], [8.1, 253.0], [8.2, 258.0], [8.3, 263.0], [8.4, 264.0], [8.5, 265.0], [8.6, 267.0], [8.7, 267.0], [8.8, 268.0], [8.9, 268.0], [9.0, 270.0], [9.1, 270.0], [9.2, 271.0], [9.3, 271.0], [9.4, 274.0], [9.5, 275.0], [9.6, 277.0], [9.7, 277.0], [9.8, 281.0], [9.9, 284.0], [10.0, 289.0], [10.1, 295.0], [10.2, 295.0], [10.3, 296.0], [10.4, 297.0], [10.5, 298.0], [10.6, 299.0], [10.7, 301.0], [10.8, 301.0], [10.9, 302.0], [11.0, 302.0], [11.1, 302.0], [11.2, 302.0], [11.3, 303.0], [11.4, 303.0], [11.5, 303.0], [11.6, 304.0], [11.7, 304.0], [11.8, 304.0], [11.9, 305.0], [12.0, 305.0], [12.1, 305.0], [12.2, 305.0], [12.3, 305.0], [12.4, 305.0], [12.5, 305.0], [12.6, 305.0], [12.7, 306.0], [12.8, 306.0], [12.9, 306.0], [13.0, 306.0], [13.1, 306.0], [13.2, 306.0], [13.3, 306.0], [13.4, 306.0], [13.5, 306.0], [13.6, 306.0], [13.7, 306.0], [13.8, 307.0], [13.9, 307.0], [14.0, 307.0], [14.1, 307.0], [14.2, 307.0], [14.3, 307.0], [14.4, 307.0], [14.5, 307.0], [14.6, 308.0], [14.7, 308.0], [14.8, 308.0], [14.9, 308.0], [15.0, 308.0], [15.1, 308.0], [15.2, 308.0], [15.3, 308.0], [15.4, 308.0], [15.5, 308.0], [15.6, 309.0], [15.7, 309.0], [15.8, 309.0], [15.9, 309.0], [16.0, 309.0], [16.1, 309.0], [16.2, 309.0], [16.3, 309.0], [16.4, 309.0], [16.5, 309.0], [16.6, 310.0], [16.7, 310.0], [16.8, 310.0], [16.9, 310.0], [17.0, 310.0], [17.1, 310.0], [17.2, 310.0], [17.3, 310.0], [17.4, 311.0], [17.5, 311.0], [17.6, 311.0], [17.7, 311.0], [17.8, 311.0], [17.9, 311.0], [18.0, 311.0], [18.1, 311.0], [18.2, 311.0], [18.3, 311.0], [18.4, 311.0], [18.5, 311.0], [18.6, 311.0], [18.7, 311.0], [18.8, 312.0], [18.9, 312.0], [19.0, 312.0], [19.1, 312.0], [19.2, 312.0], [19.3, 312.0], [19.4, 312.0], [19.5, 312.0], [19.6, 312.0], [19.7, 312.0], [19.8, 312.0], [19.9, 312.0], [20.0, 312.0], [20.1, 313.0], [20.2, 313.0], [20.3, 313.0], [20.4, 313.0], [20.5, 313.0], [20.6, 313.0], [20.7, 313.0], [20.8, 313.0], [20.9, 313.0], [21.0, 313.0], [21.1, 313.0], [21.2, 313.0], [21.3, 313.0], [21.4, 313.0], [21.5, 314.0], [21.6, 314.0], [21.7, 314.0], [21.8, 314.0], [21.9, 314.0], [22.0, 314.0], [22.1, 314.0], [22.2, 314.0], [22.3, 314.0], [22.4, 314.0], [22.5, 314.0], [22.6, 314.0], [22.7, 314.0], [22.8, 315.0], [22.9, 315.0], [23.0, 315.0], [23.1, 315.0], [23.2, 316.0], [23.3, 316.0], [23.4, 316.0], [23.5, 316.0], [23.6, 316.0], [23.7, 316.0], [23.8, 316.0], [23.9, 316.0], [24.0, 317.0], [24.1, 317.0], [24.2, 317.0], [24.3, 317.0], [24.4, 317.0], [24.5, 318.0], [24.6, 318.0], [24.7, 318.0], [24.8, 318.0], [24.9, 318.0], [25.0, 318.0], [25.1, 318.0], [25.2, 318.0], [25.3, 318.0], [25.4, 319.0], [25.5, 319.0], [25.6, 319.0], [25.7, 319.0], [25.8, 319.0], [25.9, 319.0], [26.0, 319.0], [26.1, 319.0], [26.2, 319.0], [26.3, 319.0], [26.4, 319.0], [26.5, 319.0], [26.6, 319.0], [26.7, 319.0], [26.8, 319.0], [26.9, 320.0], [27.0, 320.0], [27.1, 320.0], [27.2, 320.0], [27.3, 320.0], [27.4, 320.0], [27.5, 320.0], [27.6, 320.0], [27.7, 321.0], [27.8, 321.0], [27.9, 321.0], [28.0, 321.0], [28.1, 321.0], [28.2, 321.0], [28.3, 322.0], [28.4, 322.0], [28.5, 322.0], [28.6, 322.0], [28.7, 322.0], [28.8, 322.0], [28.9, 322.0], [29.0, 322.0], [29.1, 323.0], [29.2, 323.0], [29.3, 323.0], [29.4, 323.0], [29.5, 324.0], [29.6, 324.0], [29.7, 324.0], [29.8, 324.0], [29.9, 325.0], [30.0, 325.0], [30.1, 325.0], [30.2, 325.0], [30.3, 325.0], [30.4, 326.0], [30.5, 326.0], [30.6, 326.0], [30.7, 326.0], [30.8, 326.0], [30.9, 326.0], [31.0, 327.0], [31.1, 327.0], [31.2, 327.0], [31.3, 328.0], [31.4, 328.0], [31.5, 329.0], [31.6, 329.0], [31.7, 329.0], [31.8, 330.0], [31.9, 330.0], [32.0, 331.0], [32.1, 331.0], [32.2, 332.0], [32.3, 333.0], [32.4, 333.0], [32.5, 333.0], [32.6, 334.0], [32.7, 335.0], [32.8, 335.0], [32.9, 336.0], [33.0, 337.0], [33.1, 338.0], [33.2, 338.0], [33.3, 339.0], [33.4, 340.0], [33.5, 341.0], [33.6, 341.0], [33.7, 341.0], [33.8, 341.0], [33.9, 341.0], [34.0, 342.0], [34.1, 344.0], [34.2, 345.0], [34.3, 346.0], [34.4, 347.0], [34.5, 347.0], [34.6, 348.0], [34.7, 348.0], [34.8, 350.0], [34.9, 351.0], [35.0, 351.0], [35.1, 351.0], [35.2, 352.0], [35.3, 352.0], [35.4, 353.0], [35.5, 355.0], [35.6, 356.0], [35.7, 357.0], [35.8, 357.0], [35.9, 359.0], [36.0, 361.0], [36.1, 361.0], [36.2, 363.0], [36.3, 363.0], [36.4, 367.0], [36.5, 368.0], [36.6, 370.0], [36.7, 372.0], [36.8, 374.0], [36.9, 374.0], [37.0, 377.0], [37.1, 380.0], [37.2, 380.0], [37.3, 381.0], [37.4, 381.0], [37.5, 383.0], [37.6, 383.0], [37.7, 384.0], [37.8, 384.0], [37.9, 385.0], [38.0, 387.0], [38.1, 387.0], [38.2, 387.0], [38.3, 388.0], [38.4, 388.0], [38.5, 388.0], [38.6, 388.0], [38.7, 389.0], [38.8, 389.0], [38.9, 389.0], [39.0, 390.0], [39.1, 390.0], [39.2, 391.0], [39.3, 392.0], [39.4, 393.0], [39.5, 393.0], [39.6, 393.0], [39.7, 393.0], [39.8, 393.0], [39.9, 394.0], [40.0, 394.0], [40.1, 396.0], [40.2, 396.0], [40.3, 397.0], [40.4, 397.0], [40.5, 398.0], [40.6, 400.0], [40.7, 400.0], [40.8, 400.0], [40.9, 404.0], [41.0, 404.0], [41.1, 405.0], [41.2, 405.0], [41.3, 405.0], [41.4, 406.0], [41.5, 407.0], [41.6, 407.0], [41.7, 407.0], [41.8, 407.0], [41.9, 408.0], [42.0, 409.0], [42.1, 409.0], [42.2, 411.0], [42.3, 411.0], [42.4, 412.0], [42.5, 412.0], [42.6, 412.0], [42.7, 413.0], [42.8, 413.0], [42.9, 414.0], [43.0, 414.0], [43.1, 414.0], [43.2, 415.0], [43.3, 415.0], [43.4, 415.0], [43.5, 415.0], [43.6, 415.0], [43.7, 416.0], [43.8, 416.0], [43.9, 417.0], [44.0, 417.0], [44.1, 417.0], [44.2, 418.0], [44.3, 418.0], [44.4, 418.0], [44.5, 418.0], [44.6, 418.0], [44.7, 418.0], [44.8, 419.0], [44.9, 419.0], [45.0, 419.0], [45.1, 420.0], [45.2, 421.0], [45.3, 421.0], [45.4, 421.0], [45.5, 422.0], [45.6, 422.0], [45.7, 422.0], [45.8, 424.0], [45.9, 424.0], [46.0, 425.0], [46.1, 426.0], [46.2, 426.0], [46.3, 427.0], [46.4, 427.0], [46.5, 428.0], [46.6, 428.0], [46.7, 428.0], [46.8, 429.0], [46.9, 429.0], [47.0, 429.0], [47.1, 429.0], [47.2, 430.0], [47.3, 430.0], [47.4, 430.0], [47.5, 430.0], [47.6, 430.0], [47.7, 431.0], [47.8, 431.0], [47.9, 431.0], [48.0, 431.0], [48.1, 431.0], [48.2, 431.0], [48.3, 432.0], [48.4, 433.0], [48.5, 433.0], [48.6, 434.0], [48.7, 434.0], [48.8, 434.0], [48.9, 434.0], [49.0, 434.0], [49.1, 435.0], [49.2, 435.0], [49.3, 435.0], [49.4, 436.0], [49.5, 436.0], [49.6, 436.0], [49.7, 437.0], [49.8, 437.0], [49.9, 439.0], [50.0, 440.0], [50.1, 441.0], [50.2, 441.0], [50.3, 442.0], [50.4, 442.0], [50.5, 442.0], [50.6, 442.0], [50.7, 445.0], [50.8, 445.0], [50.9, 445.0], [51.0, 445.0], [51.1, 447.0], [51.2, 447.0], [51.3, 449.0], [51.4, 449.0], [51.5, 450.0], [51.6, 450.0], [51.7, 452.0], [51.8, 452.0], [51.9, 452.0], [52.0, 454.0], [52.1, 454.0], [52.2, 455.0], [52.3, 455.0], [52.4, 455.0], [52.5, 455.0], [52.6, 455.0], [52.7, 456.0], [52.8, 456.0], [52.9, 456.0], [53.0, 456.0], [53.1, 457.0], [53.2, 457.0], [53.3, 458.0], [53.4, 458.0], [53.5, 459.0], [53.6, 459.0], [53.7, 460.0], [53.8, 461.0], [53.9, 462.0], [54.0, 462.0], [54.1, 462.0], [54.2, 463.0], [54.3, 463.0], [54.4, 464.0], [54.5, 464.0], [54.6, 464.0], [54.7, 464.0], [54.8, 464.0], [54.9, 464.0], [55.0, 464.0], [55.1, 465.0], [55.2, 465.0], [55.3, 466.0], [55.4, 466.0], [55.5, 466.0], [55.6, 466.0], [55.7, 467.0], [55.8, 468.0], [55.9, 468.0], [56.0, 468.0], [56.1, 468.0], [56.2, 469.0], [56.3, 469.0], [56.4, 469.0], [56.5, 470.0], [56.6, 470.0], [56.7, 471.0], [56.8, 471.0], [56.9, 471.0], [57.0, 471.0], [57.1, 472.0], [57.2, 472.0], [57.3, 472.0], [57.4, 472.0], [57.5, 473.0], [57.6, 473.0], [57.7, 473.0], [57.8, 474.0], [57.9, 474.0], [58.0, 474.0], [58.1, 474.0], [58.2, 475.0], [58.3, 475.0], [58.4, 475.0], [58.5, 475.0], [58.6, 475.0], [58.7, 475.0], [58.8, 475.0], [58.9, 475.0], [59.0, 475.0], [59.1, 476.0], [59.2, 476.0], [59.3, 476.0], [59.4, 476.0], [59.5, 476.0], [59.6, 477.0], [59.7, 477.0], [59.8, 477.0], [59.9, 477.0], [60.0, 477.0], [60.1, 477.0], [60.2, 478.0], [60.3, 478.0], [60.4, 478.0], [60.5, 479.0], [60.6, 479.0], [60.7, 480.0], [60.8, 480.0], [60.9, 480.0], [61.0, 481.0], [61.1, 481.0], [61.2, 481.0], [61.3, 482.0], [61.4, 482.0], [61.5, 483.0], [61.6, 483.0], [61.7, 484.0], [61.8, 484.0], [61.9, 484.0], [62.0, 484.0], [62.1, 485.0], [62.2, 485.0], [62.3, 485.0], [62.4, 485.0], [62.5, 485.0], [62.6, 485.0], [62.7, 486.0], [62.8, 487.0], [62.9, 487.0], [63.0, 487.0], [63.1, 487.0], [63.2, 488.0], [63.3, 488.0], [63.4, 488.0], [63.5, 488.0], [63.6, 488.0], [63.7, 489.0], [63.8, 489.0], [63.9, 490.0], [64.0, 490.0], [64.1, 490.0], [64.2, 490.0], [64.3, 490.0], [64.4, 491.0], [64.5, 491.0], [64.6, 491.0], [64.7, 491.0], [64.8, 491.0], [64.9, 491.0], [65.0, 491.0], [65.1, 491.0], [65.2, 492.0], [65.3, 492.0], [65.4, 493.0], [65.5, 493.0], [65.6, 493.0], [65.7, 493.0], [65.8, 493.0], [65.9, 494.0], [66.0, 494.0], [66.1, 494.0], [66.2, 495.0], [66.3, 495.0], [66.4, 495.0], [66.5, 495.0], [66.6, 495.0], [66.7, 495.0], [66.8, 495.0], [66.9, 495.0], [67.0, 495.0], [67.1, 495.0], [67.2, 495.0], [67.3, 496.0], [67.4, 496.0], [67.5, 496.0], [67.6, 496.0], [67.7, 496.0], [67.8, 496.0], [67.9, 496.0], [68.0, 496.0], [68.1, 497.0], [68.2, 497.0], [68.3, 497.0], [68.4, 498.0], [68.5, 498.0], [68.6, 498.0], [68.7, 498.0], [68.8, 498.0], [68.9, 499.0], [69.0, 499.0], [69.1, 499.0], [69.2, 500.0], [69.3, 500.0], [69.4, 500.0], [69.5, 500.0], [69.6, 501.0], [69.7, 501.0], [69.8, 501.0], [69.9, 501.0], [70.0, 501.0], [70.1, 501.0], [70.2, 502.0], [70.3, 502.0], [70.4, 502.0], [70.5, 502.0], [70.6, 503.0], [70.7, 503.0], [70.8, 503.0], [70.9, 503.0], [71.0, 503.0], [71.1, 504.0], [71.2, 504.0], [71.3, 504.0], [71.4, 504.0], [71.5, 504.0], [71.6, 505.0], [71.7, 505.0], [71.8, 505.0], [71.9, 506.0], [72.0, 507.0], [72.1, 507.0], [72.2, 507.0], [72.3, 507.0], [72.4, 507.0], [72.5, 507.0], [72.6, 507.0], [72.7, 508.0], [72.8, 508.0], [72.9, 508.0], [73.0, 508.0], [73.1, 509.0], [73.2, 509.0], [73.3, 509.0], [73.4, 509.0], [73.5, 509.0], [73.6, 510.0], [73.7, 510.0], [73.8, 510.0], [73.9, 510.0], [74.0, 510.0], [74.1, 510.0], [74.2, 511.0], [74.3, 511.0], [74.4, 511.0], [74.5, 511.0], [74.6, 512.0], [74.7, 512.0], [74.8, 512.0], [74.9, 512.0], [75.0, 513.0], [75.1, 513.0], [75.2, 513.0], [75.3, 513.0], [75.4, 513.0], [75.5, 514.0], [75.6, 514.0], [75.7, 514.0], [75.8, 515.0], [75.9, 515.0], [76.0, 516.0], [76.1, 516.0], [76.2, 516.0], [76.3, 516.0], [76.4, 517.0], [76.5, 517.0], [76.6, 517.0], [76.7, 517.0], [76.8, 518.0], [76.9, 518.0], [77.0, 518.0], [77.1, 518.0], [77.2, 518.0], [77.3, 518.0], [77.4, 519.0], [77.5, 519.0], [77.6, 520.0], [77.7, 520.0], [77.8, 520.0], [77.9, 520.0], [78.0, 521.0], [78.1, 521.0], [78.2, 521.0], [78.3, 521.0], [78.4, 521.0], [78.5, 521.0], [78.6, 522.0], [78.7, 522.0], [78.8, 522.0], [78.9, 523.0], [79.0, 523.0], [79.1, 523.0], [79.2, 524.0], [79.3, 524.0], [79.4, 525.0], [79.5, 525.0], [79.6, 525.0], [79.7, 525.0], [79.8, 526.0], [79.9, 526.0], [80.0, 527.0], [80.1, 528.0], [80.2, 528.0], [80.3, 528.0], [80.4, 528.0], [80.5, 529.0], [80.6, 529.0], [80.7, 529.0], [80.8, 530.0], [80.9, 530.0], [81.0, 530.0], [81.1, 530.0], [81.2, 531.0], [81.3, 531.0], [81.4, 531.0], [81.5, 531.0], [81.6, 531.0], [81.7, 532.0], [81.8, 532.0], [81.9, 532.0], [82.0, 532.0], [82.1, 532.0], [82.2, 532.0], [82.3, 533.0], [82.4, 533.0], [82.5, 533.0], [82.6, 533.0], [82.7, 533.0], [82.8, 533.0], [82.9, 533.0], [83.0, 534.0], [83.1, 534.0], [83.2, 534.0], [83.3, 534.0], [83.4, 534.0], [83.5, 534.0], [83.6, 534.0], [83.7, 534.0], [83.8, 535.0], [83.9, 535.0], [84.0, 535.0], [84.1, 535.0], [84.2, 535.0], [84.3, 535.0], [84.4, 535.0], [84.5, 536.0], [84.6, 536.0], [84.7, 536.0], [84.8, 536.0], [84.9, 536.0], [85.0, 536.0], [85.1, 537.0], [85.2, 537.0], [85.3, 537.0], [85.4, 537.0], [85.5, 537.0], [85.6, 538.0], [85.7, 538.0], [85.8, 538.0], [85.9, 538.0], [86.0, 538.0], [86.1, 538.0], [86.2, 539.0], [86.3, 539.0], [86.4, 540.0], [86.5, 540.0], [86.6, 540.0], [86.7, 540.0], [86.8, 541.0], [86.9, 542.0], [87.0, 542.0], [87.1, 542.0], [87.2, 542.0], [87.3, 542.0], [87.4, 543.0], [87.5, 543.0], [87.6, 543.0], [87.7, 543.0], [87.8, 544.0], [87.9, 544.0], [88.0, 544.0], [88.1, 545.0], [88.2, 545.0], [88.3, 545.0], [88.4, 546.0], [88.5, 546.0], [88.6, 546.0], [88.7, 546.0], [88.8, 547.0], [88.9, 548.0], [89.0, 548.0], [89.1, 549.0], [89.2, 549.0], [89.3, 549.0], [89.4, 550.0], [89.5, 550.0], [89.6, 551.0], [89.7, 551.0], [89.8, 551.0], [89.9, 552.0], [90.0, 552.0], [90.1, 553.0], [90.2, 553.0], [90.3, 553.0], [90.4, 554.0], [90.5, 555.0], [90.6, 555.0], [90.7, 555.0], [90.8, 555.0], [90.9, 555.0], [91.0, 556.0], [91.1, 557.0], [91.2, 557.0], [91.3, 557.0], [91.4, 557.0], [91.5, 557.0], [91.6, 557.0], [91.7, 557.0], [91.8, 558.0], [91.9, 559.0], [92.0, 559.0], [92.1, 559.0], [92.2, 560.0], [92.3, 561.0], [92.4, 562.0], [92.5, 562.0], [92.6, 562.0], [92.7, 562.0], [92.8, 563.0], [92.9, 564.0], [93.0, 564.0], [93.1, 565.0], [93.2, 565.0], [93.3, 566.0], [93.4, 566.0], [93.5, 568.0], [93.6, 569.0], [93.7, 569.0], [93.8, 570.0], [93.9, 570.0], [94.0, 570.0], [94.1, 571.0], [94.2, 571.0], [94.3, 571.0], [94.4, 572.0], [94.5, 572.0], [94.6, 573.0], [94.7, 573.0], [94.8, 574.0], [94.9, 575.0], [95.0, 576.0], [95.1, 576.0], [95.2, 576.0], [95.3, 576.0], [95.4, 578.0], [95.5, 579.0], [95.6, 579.0], [95.7, 579.0], [95.8, 580.0], [95.9, 580.0], [96.0, 581.0], [96.1, 581.0], [96.2, 581.0], [96.3, 582.0], [96.4, 583.0], [96.5, 583.0], [96.6, 583.0], [96.7, 584.0], [96.8, 585.0], [96.9, 585.0], [97.0, 587.0], [97.1, 587.0], [97.2, 589.0], [97.3, 591.0], [97.4, 592.0], [97.5, 594.0], [97.6, 594.0], [97.7, 598.0], [97.8, 602.0], [97.9, 603.0], [98.0, 604.0], [98.1, 604.0], [98.2, 608.0], [98.3, 610.0], [98.4, 612.0], [98.5, 615.0], [98.6, 615.0], [98.7, 617.0], [98.8, 632.0], [98.9, 634.0], [99.0, 635.0], [99.1, 635.0], [99.2, 636.0], [99.3, 638.0], [99.4, 644.0], [99.5, 652.0], [99.6, 653.0], [99.7, 656.0], [99.8, 660.0], [99.9, 662.0], [100.0, 674.0]], "isOverall": false, "label": "Users with PG PGP Encryption", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 415.0, "series": [{"data": [[0.0, 35.0], [300.0, 415.0], [600.0, 31.0], [100.0, 60.0], [200.0, 53.0], [400.0, 396.0], [500.0, 397.0]], "isOverall": false, "label": "Users with PG PGP Encryption", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 423.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 964.0, "series": [{"data": [[0.0, 964.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 423.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.318181818181817, "minX": 1.56978846E12, "maxY": 9.502649507948545, "series": [{"data": [[1.56978846E12, 9.502649507948545], [1.56978852E12, 9.318181818181817]], "isOverall": false, "label": "ThreadGroup", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56978852E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 82.44444444444446, "minX": 1.0, "maxY": 443.7972536348948, "series": [{"data": [[1.0, 125.66666666666666], [2.0, 82.44444444444446], [4.0, 135.05555555555554], [8.0, 256.16666666666663], [9.0, 290.8235294117647], [5.0, 163.6842105263158], [10.0, 443.7972536348948], [3.0, 108.94444444444444], [6.0, 197.05882352941177], [7.0, 231.38888888888889]], "isOverall": false, "label": "Users with PG PGP Encryption", "isController": false}, {"data": [[9.493871665465047, 415.4513338139868]], "isOverall": false, "label": "Users with PG PGP Encryption-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 177.1, "minX": 1.56978846E12, "maxY": 792291.7666666667, "series": [{"data": [[1.56978846E12, 792291.7666666667], [1.56978852E12, 39584.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.56978846E12, 3544.6833333333334], [1.56978852E12, 177.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56978852E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 413.4738834216499, "minX": 1.56978846E12, "maxY": 455.030303030303, "series": [{"data": [[1.56978846E12, 413.4738834216499], [1.56978852E12, 455.030303030303]], "isOverall": false, "label": "Users with PG PGP Encryption", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56978852E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 413.3830431491295, "minX": 1.56978846E12, "maxY": 454.8939393939394, "series": [{"data": [[1.56978846E12, 413.3830431491295], [1.56978852E12, 454.8939393939394]], "isOverall": false, "label": "Users with PG PGP Encryption", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56978852E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.30303030303030304, "minX": 1.56978846E12, "maxY": 0.3815291445874332, "series": [{"data": [[1.56978846E12, 0.3815291445874332], [1.56978852E12, 0.30303030303030304]], "isOverall": false, "label": "Users with PG PGP Encryption", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56978852E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 57.0, "minX": 1.56978846E12, "maxY": 674.0, "series": [{"data": [[1.56978846E12, 674.0], [1.56978852E12, 521.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.56978846E12, 57.0], [1.56978852E12, 356.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.56978846E12, 554.8], [1.56978852E12, 487.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.56978846E12, 635.0], [1.56978852E12, 521.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.56978846E12, 576.0], [1.56978852E12, 497.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56978852E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 84.5, "minX": 4.0, "maxY": 585.5, "series": [{"data": [[32.0, 311.0], [4.0, 84.5], [16.0, 585.5], [17.0, 533.0], [18.0, 539.0], [19.0, 534.0], [20.0, 502.5], [21.0, 500.0], [22.0, 469.0], [24.0, 418.0], [26.0, 393.0], [28.0, 325.0], [29.0, 333.0], [30.0, 310.0], [31.0, 311.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 84.5, "minX": 4.0, "maxY": 585.5, "series": [{"data": [[32.0, 311.0], [4.0, 84.5], [16.0, 585.5], [17.0, 533.0], [18.0, 539.0], [19.0, 534.0], [20.0, 502.0], [21.0, 500.0], [22.0, 469.0], [24.0, 418.0], [26.0, 392.5], [28.0, 324.5], [29.0, 333.0], [30.0, 310.0], [31.0, 311.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.9333333333333333, "minX": 1.56978846E12, "maxY": 22.183333333333334, "series": [{"data": [[1.56978846E12, 22.183333333333334], [1.56978852E12, 0.9333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56978852E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.1, "minX": 1.56978846E12, "maxY": 22.016666666666666, "series": [{"data": [[1.56978846E12, 22.016666666666666], [1.56978852E12, 1.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56978852E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.1, "minX": 1.56978846E12, "maxY": 22.016666666666666, "series": [{"data": [[1.56978846E12, 22.016666666666666], [1.56978852E12, 1.1]], "isOverall": false, "label": "Users with PG PGP Encryption-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56978852E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.1, "minX": 1.56978846E12, "maxY": 22.016666666666666, "series": [{"data": [[1.56978846E12, 22.016666666666666], [1.56978852E12, 1.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56978852E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

