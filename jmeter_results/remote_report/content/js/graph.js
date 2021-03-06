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
        data: {"result": {"minY": 62.0, "minX": 0.0, "maxY": 5005.0, "series": [{"data": [[0.0, 62.0], [0.1, 74.0], [0.2, 80.0], [0.3, 86.0], [0.4, 86.0], [0.5, 88.0], [0.6, 90.0], [0.7, 91.0], [0.8, 92.0], [0.9, 92.0], [1.0, 93.0], [1.1, 94.0], [1.2, 94.0], [1.3, 95.0], [1.4, 96.0], [1.5, 97.0], [1.6, 97.0], [1.7, 98.0], [1.8, 98.0], [1.9, 98.0], [2.0, 98.0], [2.1, 99.0], [2.2, 99.0], [2.3, 99.0], [2.4, 99.0], [2.5, 100.0], [2.6, 100.0], [2.7, 100.0], [2.8, 101.0], [2.9, 101.0], [3.0, 101.0], [3.1, 101.0], [3.2, 102.0], [3.3, 102.0], [3.4, 102.0], [3.5, 102.0], [3.6, 103.0], [3.7, 103.0], [3.8, 103.0], [3.9, 103.0], [4.0, 104.0], [4.1, 104.0], [4.2, 104.0], [4.3, 105.0], [4.4, 105.0], [4.5, 105.0], [4.6, 106.0], [4.7, 106.0], [4.8, 106.0], [4.9, 106.0], [5.0, 106.0], [5.1, 107.0], [5.2, 107.0], [5.3, 107.0], [5.4, 107.0], [5.5, 107.0], [5.6, 108.0], [5.7, 108.0], [5.8, 108.0], [5.9, 108.0], [6.0, 108.0], [6.1, 108.0], [6.2, 108.0], [6.3, 109.0], [6.4, 109.0], [6.5, 109.0], [6.6, 109.0], [6.7, 109.0], [6.8, 109.0], [6.9, 110.0], [7.0, 110.0], [7.1, 110.0], [7.2, 110.0], [7.3, 110.0], [7.4, 111.0], [7.5, 111.0], [7.6, 111.0], [7.7, 111.0], [7.8, 111.0], [7.9, 111.0], [8.0, 111.0], [8.1, 112.0], [8.2, 112.0], [8.3, 112.0], [8.4, 112.0], [8.5, 112.0], [8.6, 112.0], [8.7, 112.0], [8.8, 113.0], [8.9, 113.0], [9.0, 113.0], [9.1, 113.0], [9.2, 113.0], [9.3, 113.0], [9.4, 113.0], [9.5, 113.0], [9.6, 114.0], [9.7, 114.0], [9.8, 114.0], [9.9, 114.0], [10.0, 114.0], [10.1, 114.0], [10.2, 114.0], [10.3, 115.0], [10.4, 115.0], [10.5, 115.0], [10.6, 115.0], [10.7, 115.0], [10.8, 115.0], [10.9, 115.0], [11.0, 115.0], [11.1, 116.0], [11.2, 116.0], [11.3, 116.0], [11.4, 116.0], [11.5, 116.0], [11.6, 116.0], [11.7, 116.0], [11.8, 116.0], [11.9, 116.0], [12.0, 117.0], [12.1, 117.0], [12.2, 117.0], [12.3, 117.0], [12.4, 117.0], [12.5, 117.0], [12.6, 117.0], [12.7, 117.0], [12.8, 117.0], [12.9, 117.0], [13.0, 118.0], [13.1, 118.0], [13.2, 118.0], [13.3, 118.0], [13.4, 118.0], [13.5, 118.0], [13.6, 118.0], [13.7, 118.0], [13.8, 118.0], [13.9, 119.0], [14.0, 119.0], [14.1, 119.0], [14.2, 119.0], [14.3, 119.0], [14.4, 119.0], [14.5, 119.0], [14.6, 119.0], [14.7, 119.0], [14.8, 119.0], [14.9, 119.0], [15.0, 120.0], [15.1, 120.0], [15.2, 120.0], [15.3, 120.0], [15.4, 120.0], [15.5, 120.0], [15.6, 120.0], [15.7, 120.0], [15.8, 120.0], [15.9, 120.0], [16.0, 120.0], [16.1, 120.0], [16.2, 121.0], [16.3, 121.0], [16.4, 121.0], [16.5, 121.0], [16.6, 121.0], [16.7, 121.0], [16.8, 121.0], [16.9, 121.0], [17.0, 121.0], [17.1, 121.0], [17.2, 121.0], [17.3, 121.0], [17.4, 122.0], [17.5, 122.0], [17.6, 122.0], [17.7, 122.0], [17.8, 122.0], [17.9, 122.0], [18.0, 122.0], [18.1, 122.0], [18.2, 122.0], [18.3, 122.0], [18.4, 122.0], [18.5, 123.0], [18.6, 123.0], [18.7, 123.0], [18.8, 123.0], [18.9, 123.0], [19.0, 123.0], [19.1, 123.0], [19.2, 123.0], [19.3, 123.0], [19.4, 123.0], [19.5, 123.0], [19.6, 123.0], [19.7, 124.0], [19.8, 124.0], [19.9, 124.0], [20.0, 124.0], [20.1, 124.0], [20.2, 124.0], [20.3, 124.0], [20.4, 124.0], [20.5, 124.0], [20.6, 124.0], [20.7, 124.0], [20.8, 124.0], [20.9, 124.0], [21.0, 124.0], [21.1, 125.0], [21.2, 125.0], [21.3, 125.0], [21.4, 125.0], [21.5, 125.0], [21.6, 125.0], [21.7, 125.0], [21.8, 125.0], [21.9, 125.0], [22.0, 125.0], [22.1, 125.0], [22.2, 125.0], [22.3, 125.0], [22.4, 125.0], [22.5, 125.0], [22.6, 126.0], [22.7, 126.0], [22.8, 126.0], [22.9, 126.0], [23.0, 126.0], [23.1, 126.0], [23.2, 126.0], [23.3, 126.0], [23.4, 126.0], [23.5, 126.0], [23.6, 127.0], [23.7, 127.0], [23.8, 127.0], [23.9, 127.0], [24.0, 127.0], [24.1, 127.0], [24.2, 127.0], [24.3, 127.0], [24.4, 127.0], [24.5, 127.0], [24.6, 127.0], [24.7, 127.0], [24.8, 128.0], [24.9, 128.0], [25.0, 128.0], [25.1, 128.0], [25.2, 128.0], [25.3, 128.0], [25.4, 128.0], [25.5, 128.0], [25.6, 128.0], [25.7, 128.0], [25.8, 128.0], [25.9, 128.0], [26.0, 128.0], [26.1, 128.0], [26.2, 128.0], [26.3, 129.0], [26.4, 129.0], [26.5, 129.0], [26.6, 129.0], [26.7, 129.0], [26.8, 129.0], [26.9, 129.0], [27.0, 129.0], [27.1, 129.0], [27.2, 129.0], [27.3, 129.0], [27.4, 130.0], [27.5, 130.0], [27.6, 130.0], [27.7, 130.0], [27.8, 130.0], [27.9, 130.0], [28.0, 130.0], [28.1, 130.0], [28.2, 130.0], [28.3, 130.0], [28.4, 130.0], [28.5, 131.0], [28.6, 131.0], [28.7, 131.0], [28.8, 131.0], [28.9, 131.0], [29.0, 131.0], [29.1, 131.0], [29.2, 131.0], [29.3, 131.0], [29.4, 131.0], [29.5, 131.0], [29.6, 131.0], [29.7, 131.0], [29.8, 131.0], [29.9, 131.0], [30.0, 131.0], [30.1, 131.0], [30.2, 131.0], [30.3, 131.0], [30.4, 132.0], [30.5, 132.0], [30.6, 132.0], [30.7, 132.0], [30.8, 132.0], [30.9, 132.0], [31.0, 132.0], [31.1, 132.0], [31.2, 132.0], [31.3, 132.0], [31.4, 132.0], [31.5, 132.0], [31.6, 132.0], [31.7, 133.0], [31.8, 133.0], [31.9, 133.0], [32.0, 133.0], [32.1, 133.0], [32.2, 133.0], [32.3, 133.0], [32.4, 133.0], [32.5, 133.0], [32.6, 133.0], [32.7, 133.0], [32.8, 133.0], [32.9, 133.0], [33.0, 133.0], [33.1, 133.0], [33.2, 133.0], [33.3, 134.0], [33.4, 134.0], [33.5, 134.0], [33.6, 134.0], [33.7, 134.0], [33.8, 134.0], [33.9, 134.0], [34.0, 134.0], [34.1, 134.0], [34.2, 134.0], [34.3, 134.0], [34.4, 135.0], [34.5, 135.0], [34.6, 135.0], [34.7, 135.0], [34.8, 135.0], [34.9, 135.0], [35.0, 135.0], [35.1, 135.0], [35.2, 135.0], [35.3, 135.0], [35.4, 135.0], [35.5, 135.0], [35.6, 135.0], [35.7, 135.0], [35.8, 136.0], [35.9, 136.0], [36.0, 136.0], [36.1, 136.0], [36.2, 136.0], [36.3, 136.0], [36.4, 136.0], [36.5, 136.0], [36.6, 136.0], [36.7, 136.0], [36.8, 136.0], [36.9, 136.0], [37.0, 136.0], [37.1, 137.0], [37.2, 137.0], [37.3, 137.0], [37.4, 137.0], [37.5, 137.0], [37.6, 137.0], [37.7, 137.0], [37.8, 137.0], [37.9, 137.0], [38.0, 137.0], [38.1, 137.0], [38.2, 137.0], [38.3, 138.0], [38.4, 138.0], [38.5, 138.0], [38.6, 138.0], [38.7, 138.0], [38.8, 138.0], [38.9, 138.0], [39.0, 138.0], [39.1, 138.0], [39.2, 138.0], [39.3, 138.0], [39.4, 138.0], [39.5, 138.0], [39.6, 139.0], [39.7, 139.0], [39.8, 139.0], [39.9, 139.0], [40.0, 139.0], [40.1, 139.0], [40.2, 139.0], [40.3, 139.0], [40.4, 139.0], [40.5, 139.0], [40.6, 139.0], [40.7, 139.0], [40.8, 140.0], [40.9, 140.0], [41.0, 140.0], [41.1, 140.0], [41.2, 140.0], [41.3, 140.0], [41.4, 140.0], [41.5, 140.0], [41.6, 140.0], [41.7, 140.0], [41.8, 140.0], [41.9, 140.0], [42.0, 140.0], [42.1, 141.0], [42.2, 141.0], [42.3, 141.0], [42.4, 141.0], [42.5, 141.0], [42.6, 141.0], [42.7, 141.0], [42.8, 141.0], [42.9, 141.0], [43.0, 141.0], [43.1, 141.0], [43.2, 142.0], [43.3, 142.0], [43.4, 142.0], [43.5, 142.0], [43.6, 142.0], [43.7, 142.0], [43.8, 142.0], [43.9, 142.0], [44.0, 142.0], [44.1, 142.0], [44.2, 142.0], [44.3, 142.0], [44.4, 142.0], [44.5, 142.0], [44.6, 143.0], [44.7, 143.0], [44.8, 143.0], [44.9, 143.0], [45.0, 143.0], [45.1, 143.0], [45.2, 143.0], [45.3, 143.0], [45.4, 143.0], [45.5, 143.0], [45.6, 143.0], [45.7, 143.0], [45.8, 143.0], [45.9, 143.0], [46.0, 144.0], [46.1, 144.0], [46.2, 144.0], [46.3, 144.0], [46.4, 144.0], [46.5, 144.0], [46.6, 144.0], [46.7, 144.0], [46.8, 144.0], [46.9, 144.0], [47.0, 144.0], [47.1, 144.0], [47.2, 144.0], [47.3, 145.0], [47.4, 145.0], [47.5, 145.0], [47.6, 145.0], [47.7, 145.0], [47.8, 145.0], [47.9, 145.0], [48.0, 145.0], [48.1, 145.0], [48.2, 145.0], [48.3, 145.0], [48.4, 145.0], [48.5, 145.0], [48.6, 145.0], [48.7, 145.0], [48.8, 146.0], [48.9, 146.0], [49.0, 146.0], [49.1, 146.0], [49.2, 146.0], [49.3, 146.0], [49.4, 146.0], [49.5, 146.0], [49.6, 146.0], [49.7, 146.0], [49.8, 146.0], [49.9, 146.0], [50.0, 146.0], [50.1, 146.0], [50.2, 147.0], [50.3, 147.0], [50.4, 147.0], [50.5, 147.0], [50.6, 147.0], [50.7, 147.0], [50.8, 147.0], [50.9, 147.0], [51.0, 147.0], [51.1, 147.0], [51.2, 147.0], [51.3, 147.0], [51.4, 148.0], [51.5, 148.0], [51.6, 148.0], [51.7, 148.0], [51.8, 148.0], [51.9, 148.0], [52.0, 148.0], [52.1, 148.0], [52.2, 148.0], [52.3, 148.0], [52.4, 148.0], [52.5, 149.0], [52.6, 149.0], [52.7, 149.0], [52.8, 149.0], [52.9, 149.0], [53.0, 149.0], [53.1, 149.0], [53.2, 149.0], [53.3, 149.0], [53.4, 149.0], [53.5, 150.0], [53.6, 150.0], [53.7, 150.0], [53.8, 150.0], [53.9, 150.0], [54.0, 150.0], [54.1, 150.0], [54.2, 150.0], [54.3, 150.0], [54.4, 150.0], [54.5, 150.0], [54.6, 150.0], [54.7, 151.0], [54.8, 151.0], [54.9, 151.0], [55.0, 151.0], [55.1, 151.0], [55.2, 151.0], [55.3, 151.0], [55.4, 151.0], [55.5, 151.0], [55.6, 151.0], [55.7, 151.0], [55.8, 151.0], [55.9, 151.0], [56.0, 151.0], [56.1, 151.0], [56.2, 152.0], [56.3, 152.0], [56.4, 152.0], [56.5, 152.0], [56.6, 152.0], [56.7, 152.0], [56.8, 152.0], [56.9, 152.0], [57.0, 152.0], [57.1, 152.0], [57.2, 152.0], [57.3, 152.0], [57.4, 153.0], [57.5, 153.0], [57.6, 153.0], [57.7, 153.0], [57.8, 153.0], [57.9, 153.0], [58.0, 153.0], [58.1, 153.0], [58.2, 153.0], [58.3, 153.0], [58.4, 153.0], [58.5, 153.0], [58.6, 154.0], [58.7, 154.0], [58.8, 154.0], [58.9, 154.0], [59.0, 154.0], [59.1, 154.0], [59.2, 154.0], [59.3, 154.0], [59.4, 154.0], [59.5, 154.0], [59.6, 154.0], [59.7, 155.0], [59.8, 155.0], [59.9, 155.0], [60.0, 155.0], [60.1, 155.0], [60.2, 155.0], [60.3, 155.0], [60.4, 155.0], [60.5, 155.0], [60.6, 155.0], [60.7, 155.0], [60.8, 155.0], [60.9, 156.0], [61.0, 156.0], [61.1, 156.0], [61.2, 156.0], [61.3, 156.0], [61.4, 156.0], [61.5, 156.0], [61.6, 156.0], [61.7, 156.0], [61.8, 156.0], [61.9, 156.0], [62.0, 156.0], [62.1, 156.0], [62.2, 157.0], [62.3, 157.0], [62.4, 157.0], [62.5, 157.0], [62.6, 157.0], [62.7, 157.0], [62.8, 157.0], [62.9, 157.0], [63.0, 157.0], [63.1, 157.0], [63.2, 157.0], [63.3, 157.0], [63.4, 158.0], [63.5, 158.0], [63.6, 158.0], [63.7, 158.0], [63.8, 158.0], [63.9, 158.0], [64.0, 158.0], [64.1, 158.0], [64.2, 158.0], [64.3, 158.0], [64.4, 158.0], [64.5, 159.0], [64.6, 159.0], [64.7, 159.0], [64.8, 159.0], [64.9, 159.0], [65.0, 159.0], [65.1, 159.0], [65.2, 159.0], [65.3, 159.0], [65.4, 159.0], [65.5, 159.0], [65.6, 159.0], [65.7, 160.0], [65.8, 160.0], [65.9, 160.0], [66.0, 160.0], [66.1, 160.0], [66.2, 160.0], [66.3, 160.0], [66.4, 160.0], [66.5, 160.0], [66.6, 161.0], [66.7, 161.0], [66.8, 161.0], [66.9, 161.0], [67.0, 161.0], [67.1, 161.0], [67.2, 161.0], [67.3, 161.0], [67.4, 161.0], [67.5, 161.0], [67.6, 161.0], [67.7, 161.0], [67.8, 162.0], [67.9, 162.0], [68.0, 162.0], [68.1, 162.0], [68.2, 162.0], [68.3, 162.0], [68.4, 162.0], [68.5, 162.0], [68.6, 162.0], [68.7, 162.0], [68.8, 163.0], [68.9, 163.0], [69.0, 163.0], [69.1, 163.0], [69.2, 163.0], [69.3, 163.0], [69.4, 163.0], [69.5, 163.0], [69.6, 163.0], [69.7, 164.0], [69.8, 164.0], [69.9, 164.0], [70.0, 164.0], [70.1, 164.0], [70.2, 164.0], [70.3, 164.0], [70.4, 164.0], [70.5, 164.0], [70.6, 164.0], [70.7, 164.0], [70.8, 164.0], [70.9, 164.0], [71.0, 165.0], [71.1, 165.0], [71.2, 165.0], [71.3, 165.0], [71.4, 165.0], [71.5, 165.0], [71.6, 165.0], [71.7, 165.0], [71.8, 165.0], [71.9, 165.0], [72.0, 166.0], [72.1, 166.0], [72.2, 166.0], [72.3, 166.0], [72.4, 166.0], [72.5, 166.0], [72.6, 166.0], [72.7, 166.0], [72.8, 166.0], [72.9, 167.0], [73.0, 167.0], [73.1, 167.0], [73.2, 167.0], [73.3, 167.0], [73.4, 167.0], [73.5, 167.0], [73.6, 167.0], [73.7, 167.0], [73.8, 167.0], [73.9, 167.0], [74.0, 167.0], [74.1, 168.0], [74.2, 168.0], [74.3, 168.0], [74.4, 168.0], [74.5, 168.0], [74.6, 168.0], [74.7, 168.0], [74.8, 168.0], [74.9, 169.0], [75.0, 169.0], [75.1, 169.0], [75.2, 169.0], [75.3, 169.0], [75.4, 169.0], [75.5, 169.0], [75.6, 169.0], [75.7, 169.0], [75.8, 169.0], [75.9, 170.0], [76.0, 170.0], [76.1, 170.0], [76.2, 170.0], [76.3, 170.0], [76.4, 170.0], [76.5, 170.0], [76.6, 170.0], [76.7, 171.0], [76.8, 171.0], [76.9, 171.0], [77.0, 171.0], [77.1, 171.0], [77.2, 171.0], [77.3, 171.0], [77.4, 172.0], [77.5, 172.0], [77.6, 172.0], [77.7, 172.0], [77.8, 172.0], [77.9, 172.0], [78.0, 172.0], [78.1, 172.0], [78.2, 172.0], [78.3, 172.0], [78.4, 173.0], [78.5, 173.0], [78.6, 173.0], [78.7, 173.0], [78.8, 173.0], [78.9, 173.0], [79.0, 173.0], [79.1, 173.0], [79.2, 174.0], [79.3, 174.0], [79.4, 174.0], [79.5, 174.0], [79.6, 174.0], [79.7, 174.0], [79.8, 175.0], [79.9, 175.0], [80.0, 175.0], [80.1, 175.0], [80.2, 175.0], [80.3, 175.0], [80.4, 175.0], [80.5, 175.0], [80.6, 176.0], [80.7, 176.0], [80.8, 176.0], [80.9, 176.0], [81.0, 176.0], [81.1, 176.0], [81.2, 176.0], [81.3, 177.0], [81.4, 177.0], [81.5, 177.0], [81.6, 177.0], [81.7, 178.0], [81.8, 178.0], [81.9, 178.0], [82.0, 178.0], [82.1, 178.0], [82.2, 178.0], [82.3, 178.0], [82.4, 179.0], [82.5, 179.0], [82.6, 179.0], [82.7, 179.0], [82.8, 179.0], [82.9, 179.0], [83.0, 179.0], [83.1, 179.0], [83.2, 180.0], [83.3, 180.0], [83.4, 180.0], [83.5, 180.0], [83.6, 180.0], [83.7, 180.0], [83.8, 180.0], [83.9, 180.0], [84.0, 181.0], [84.1, 181.0], [84.2, 181.0], [84.3, 181.0], [84.4, 181.0], [84.5, 181.0], [84.6, 181.0], [84.7, 182.0], [84.8, 182.0], [84.9, 182.0], [85.0, 182.0], [85.1, 182.0], [85.2, 182.0], [85.3, 182.0], [85.4, 183.0], [85.5, 183.0], [85.6, 183.0], [85.7, 183.0], [85.8, 183.0], [85.9, 184.0], [86.0, 184.0], [86.1, 184.0], [86.2, 184.0], [86.3, 184.0], [86.4, 184.0], [86.5, 184.0], [86.6, 185.0], [86.7, 185.0], [86.8, 185.0], [86.9, 185.0], [87.0, 185.0], [87.1, 185.0], [87.2, 185.0], [87.3, 185.0], [87.4, 186.0], [87.5, 186.0], [87.6, 186.0], [87.7, 186.0], [87.8, 186.0], [87.9, 187.0], [88.0, 187.0], [88.1, 187.0], [88.2, 188.0], [88.3, 188.0], [88.4, 188.0], [88.5, 189.0], [88.6, 189.0], [88.7, 189.0], [88.8, 190.0], [88.9, 190.0], [89.0, 190.0], [89.1, 190.0], [89.2, 190.0], [89.3, 190.0], [89.4, 190.0], [89.5, 191.0], [89.6, 191.0], [89.7, 191.0], [89.8, 191.0], [89.9, 192.0], [90.0, 192.0], [90.1, 192.0], [90.2, 193.0], [90.3, 193.0], [90.4, 193.0], [90.5, 193.0], [90.6, 194.0], [90.7, 194.0], [90.8, 194.0], [90.9, 194.0], [91.0, 195.0], [91.1, 195.0], [91.2, 195.0], [91.3, 196.0], [91.4, 196.0], [91.5, 197.0], [91.6, 197.0], [91.7, 197.0], [91.8, 198.0], [91.9, 198.0], [92.0, 198.0], [92.1, 199.0], [92.2, 199.0], [92.3, 199.0], [92.4, 199.0], [92.5, 200.0], [92.6, 200.0], [92.7, 200.0], [92.8, 201.0], [92.9, 201.0], [93.0, 202.0], [93.1, 202.0], [93.2, 203.0], [93.3, 203.0], [93.4, 203.0], [93.5, 204.0], [93.6, 204.0], [93.7, 205.0], [93.8, 205.0], [93.9, 206.0], [94.0, 206.0], [94.1, 206.0], [94.2, 207.0], [94.3, 207.0], [94.4, 208.0], [94.5, 208.0], [94.6, 209.0], [94.7, 209.0], [94.8, 210.0], [94.9, 210.0], [95.0, 210.0], [95.1, 211.0], [95.2, 212.0], [95.3, 212.0], [95.4, 213.0], [95.5, 213.0], [95.6, 214.0], [95.7, 215.0], [95.8, 215.0], [95.9, 217.0], [96.0, 217.0], [96.1, 217.0], [96.2, 218.0], [96.3, 218.0], [96.4, 219.0], [96.5, 220.0], [96.6, 220.0], [96.7, 221.0], [96.8, 222.0], [96.9, 224.0], [97.0, 225.0], [97.1, 225.0], [97.2, 226.0], [97.3, 227.0], [97.4, 228.0], [97.5, 228.0], [97.6, 229.0], [97.7, 231.0], [97.8, 232.0], [97.9, 233.0], [98.0, 233.0], [98.1, 235.0], [98.2, 235.0], [98.3, 236.0], [98.4, 236.0], [98.5, 239.0], [98.6, 242.0], [98.7, 245.0], [98.8, 249.0], [98.9, 251.0], [99.0, 255.0], [99.1, 262.0], [99.2, 269.0], [99.3, 286.0], [99.4, 339.0], [99.5, 723.0], [99.6, 1293.0], [99.7, 2327.0], [99.8, 5002.0], [99.9, 5003.0], [100.0, 5005.0]], "isOverall": false, "label": "Users with TCP encryption", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 3334.0, "series": [{"data": [[0.0, 89.0], [2300.0, 1.0], [2800.0, 2.0], [700.0, 3.0], [200.0, 256.0], [3900.0, 1.0], [1000.0, 1.0], [1200.0, 1.0], [300.0, 5.0], [5000.0, 8.0], [1300.0, 1.0], [100.0, 3334.0], [400.0, 1.0], [1800.0, 1.0]], "isOverall": false, "label": "Users with TCP encryption", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 3685.0, "series": [{"data": [[0.0, 3685.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 5.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 8.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.966362999299232, "minX": 1.56978972E12, "maxY": 9.980237154150196, "series": [{"data": [[1.56978972E12, 9.966362999299232], [1.56978978E12, 9.980237154150196]], "isOverall": false, "label": "ThreadGroup", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56978978E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 150.48525395958512, "minX": 1.0, "maxY": 5005.0, "series": [{"data": [[8.0, 1361.9285714285716], [4.0, 5003.0], [2.0, 5002.0], [1.0, 5004.0], [9.0, 273.34999999999997], [10.0, 150.48525395958512], [5.0, 5005.0], [6.0, 5002.0], [3.0, 5003.0], [7.0, 3918.0]], "isOverall": false, "label": "Users with TCP encryption", "isController": false}, {"data": [[9.974892008639298, 165.62257019438425]], "isOverall": false, "label": "Users with TCP encryption-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3234.5333333333333, "minX": 1.56978972E12, "maxY": 862039.7666666667, "series": [{"data": [[1.56978972E12, 541927.2166666667], [1.56978978E12, 862039.7666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.56978972E12, 3234.5333333333333], [1.56978978E12, 5143.066666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56978978E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 149.04484933426784, "minX": 1.56978972E12, "maxY": 176.01185770750962, "series": [{"data": [[1.56978972E12, 149.04484933426784], [1.56978978E12, 176.01185770750962]], "isOverall": false, "label": "Users with TCP encryption", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56978978E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 148.98598458304156, "minX": 1.56978972E12, "maxY": 158.38208168642961, "series": [{"data": [[1.56978972E12, 148.98598458304156], [1.56978978E12, 158.38208168642961]], "isOverall": false, "label": "Users with TCP encryption", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56978978E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.22134387351778667, "minX": 1.56978972E12, "maxY": 0.32936229852838106, "series": [{"data": [[1.56978972E12, 0.32936229852838106], [1.56978978E12, 0.22134387351778667]], "isOverall": false, "label": "Users with TCP encryption", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56978978E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 62.0, "minX": 1.56978972E12, "maxY": 3921.0, "series": [{"data": [[1.56978972E12, 3921.0], [1.56978978E12, 316.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.56978972E12, 62.0], [1.56978978E12, 65.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.56978972E12, 165.0], [1.56978978E12, 202.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.56978972E12, 350.52000000000044], [1.56978978E12, 247.30000000000018]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.56978972E12, 179.0], [1.56978978E12, 218.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56978978E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 119.0, "minX": 1.0, "maxY": 5004.0, "series": [{"data": [[49.0, 211.0], [50.0, 192.0], [53.0, 186.0], [52.0, 185.0], [55.0, 183.0], [54.0, 184.0], [58.0, 165.5], [59.0, 167.0], [61.0, 158.0], [60.0, 164.0], [62.0, 158.5], [63.0, 157.0], [67.0, 154.0], [64.0, 158.5], [71.0, 138.5], [70.0, 137.0], [68.0, 154.0], [72.0, 137.0], [73.0, 135.5], [74.0, 134.0], [75.0, 133.0], [79.0, 130.0], [76.0, 130.5], [78.0, 126.5], [81.0, 119.5], [80.0, 122.0], [84.0, 119.0], [9.0, 167.0], [1.0, 2833.0], [28.0, 188.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 5004.0], [6.0, 5003.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 2831.0, "series": [{"data": [[49.0, 211.0], [50.0, 192.0], [53.0, 186.0], [52.0, 185.0], [55.0, 183.0], [54.0, 183.5], [58.0, 165.5], [59.0, 167.0], [61.0, 158.0], [60.0, 164.0], [62.0, 158.5], [63.0, 157.0], [67.0, 153.0], [64.0, 158.5], [71.0, 138.5], [70.0, 136.5], [68.0, 154.0], [72.0, 137.0], [73.0, 135.5], [74.0, 134.0], [75.0, 133.0], [79.0, 130.0], [76.0, 130.5], [78.0, 126.0], [81.0, 119.5], [80.0, 122.0], [84.0, 119.0], [9.0, 167.0], [1.0, 2831.0], [28.0, 187.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 0.0], [6.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 23.95, "minX": 1.56978972E12, "maxY": 37.78333333333333, "series": [{"data": [[1.56978972E12, 23.95], [1.56978978E12, 37.78333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56978978E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.56978972E12, "maxY": 37.81666666666667, "series": [{"data": [[1.56978972E12, 23.783333333333335], [1.56978978E12, 37.81666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.56978978E12, 0.13333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.56978978E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.56978972E12, "maxY": 37.81666666666667, "series": [{"data": [[1.56978972E12, 23.783333333333335], [1.56978978E12, 37.81666666666667]], "isOverall": false, "label": "Users with TCP encryption-success", "isController": false}, {"data": [[1.56978978E12, 0.13333333333333333]], "isOverall": false, "label": "Users with TCP encryption-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56978978E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.56978972E12, "maxY": 37.81666666666667, "series": [{"data": [[1.56978972E12, 23.783333333333335], [1.56978978E12, 37.81666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.56978978E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.56978978E12, "title": "Total Transactions Per Second"}},
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

