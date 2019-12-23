export function getLyricArr(lyric) {
    if (lyric) {
        let lineArr = lyric.split('\n'); // 歌词以排为界数组
        let timeReg = /\[\d{2}:\d{2}.\d{2}\]/g;
        let result = [];
        for (let i in lineArr) {
            let time = lineArr[i].match(timeReg);
            if (!time) continue;
            let curStr = lineArr[i].replace(timeReg, '');
            for (let j in time) {
                let t = time[j].slice(1, -1).split(':'); // 时间的格式是[00:00.00] 分钟和毫秒是t[0],t[1]
                let curSecond = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
                result.push([curSecond, curStr]);
            }
        }
        result.sort(function (a, b) {
            return a[0] - b[0];
        });
        return result;
    }else{
        return [];
    }
}