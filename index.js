module.exports = {
    gattDefs: {
        service: [
            { name: 'irTemperature', uuid: '0xaa00' },
            { name: 'accelerometer', uuid: '0xaa10' },
            { name: 'humidity', uuid: '0xaa20' },
            { name: 'magnetometer', uuid: '0xaa30' },
            { name: 'barometer', uuid: '0xaa40' },
            { name: 'gyroscope', uuid: '0xaa50' },
            { name: 'simpleKey', uuid: '0xffe0' },
            { name: 'test', uuid: '0xaa60' },
            { name: 'oad', uuid: '0xffc0' },
        ],
        characteristic: [
            {name: 'temp', uuid: '0xaa01', params: ['rawT2', 'rawT1'], types: ['uint16', 'uint16']},
            {name: 'tempConfig', uuid: '0xaa02', params: ['config'], types: ['uint8']}, 
            {name: 'tempMeasPeriod', uuid: '0xaa03', params: ['period'], types: ['uint8']}, 
            {name: 'acceler', uuid: '0xaa11', params: ['x', 'y', 'z'], types: ['uint8', 'uint8', 'uint8']},
            {name: 'accelerConfig', uuid: '0xaa12', params: ['config'], types: ['uint8']}, 
            {name: 'accelerMeasPeriod', uuid: '0xaa13', params: ['period'], types: ['uint8']},
            {name: 'humid', uuid: '0xaa21', params: ['temp', 'humid'], types: ['uint16', 'uint16']},
            {name: 'humidConfig', uuid: '0xaa22', params: ['config'], types: ['uint8']}, 
            {name: 'humidMeasPeriod', uuid: '0xaa23', params: ['period'], types: ['uint8']}, 
            {name: 'magnet', uuid: '0xaa31', params: ['x', 'y', 'z'], types: ['uint16', 'uint16', 'uint16']},
            {name: 'magnetConfig', uuid: '0xaa32', params: ['config'], types: ['uint8']}, 
            {name: 'magnetMeasPeriod', uuid: '0xaa33', params: ['period'], types: ['uint8']}, 
            {name: 'baro', uuid: '0xaa41', params: ['temp', 'press'], types: ['uint16', 'uint16']},
            {name: 'baroConfig', uuid: '0xaa42', params: ['config'], types: ['uint8']}, 
            {name: 'baroCalib', uuid: '0xaa43', params: ['val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'val7', 'val8'], 
                                                types: ['uint16', 'uint16', 'uint16', 'uint16', 'uint16', 'uint16', 'uint16', 'uint16']},
            {name: 'baroMeasPeriod', uuid: '0xaa44', params: ['period'], types: ['uint8']}, 
            {name: 'gyro', uuid: '0xaa51', params: ['x', 'y', 'z'], types: ['uint16', 'uint16', 'uint16']},
            {name: 'gyroConfig', uuid: '0xaa52', params: ['config'], types: ['uint8']}, 
            {name: 'gyroMeasPeriod', uuid: '0xaa53', params: ['period'], types: ['uint8']}, 
            {name: 'test', uuid: '0xaa61', params: ['power'], types: ['uint16']},
            {name: 'testConfig', uuid: '0xaa62', params: ['config'], types: ['uint8']}, 
            {name: 'keyPressState', uuid: '0xffe1', params: ['enable'], types: ['uint8']}, 
            {name: 'oadImageIdentify', uuid: '0xffc1'},
            {name: 'oadImageBlock', uuid: '0xffc2'}, 
        ]
    },
    examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'Texas Instruments' &&
            basicInfo.devName === 'TI BLE Sensor Tag' &&
            basicInfo.fwRev === '1.01 (Feb  7 2013)')
            isMine = true;

        return isMine;
    }
};