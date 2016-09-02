module.exports = {
    gattDefs: {
        service: [
            { 
                name: 'irTemperature', 
                uuid: '0xf000aa0004514000b000000000000000' 
            },
            { 
                name: 'accelerometer', 
                uuid: '0xf000aa1004514000b000000000000000' 
            },
            { 
                name: 'humidity', 
                uuid: '0xf000aa02004514000b000000000000000' 
            },
            { 
                name: 'magnetometer', 
                uuid: '0xf000aa3004514000b000000000000000' 
            },
            { 
                name: 'barometer', 
                uuid: '0xf000aa4004514000b000000000000000' 
            },
            { 
                name: 'gyroscope', 
                uuid: '0xf000aa5004514000b000000000000000' 
            },
            { 
                name: 'simpleKey', 
                uuid: '0xffe0' 
            },
            { 
                name: 'test', 
                uuid: '0xf000aa6004514000b000000000000000' 
            },
            { 
                name: 'oad', 
                uuid: '0xf000ffc004514000b000000000000000' 
            },
        ],
        characteristic: [
            {
                name: 'temp', 
                uuid: '0xf000aa0104514000b000000000000000', 
                params: ['rawT2', 'rawT1'], 
                types: ['uint16', 'uint16'] 
            },
            { 
                name: 'tempConfig', 
                uuid: '0xf000aa0204514000b000000000000000', 
                params: ['config'], 
                types: ['uint8'] 
            }, 
            {
                name: 'tempMeasPeriod', 
                    uuid: '0xf000aa0304514000b000000000000000', 
                    params: ['period'], 
                    types: ['uint8'] 
                }, 
            { 
                name: 'acceler', 
                uuid: '0xf000aa1104514000b000000000000000', 
                params: ['x', 'y', 'z'], 
                types: ['uint8', 'uint8', 'uint8'] 
            },
            { 
                name: 'accelerConfig', 
                uuid: '0xf000aa1204514000b000000000000000', 
                params: ['config'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'accelerMeasPeriod', 
                uuid: '0xf000aa1304514000b000000000000000', 
                params: ['period'], 
                types: ['uint8'] 
            },
            { 
                name: 'humid', 
                uuid: '0xf000aa2104514000b000000000000000', 
                params: ['temp', 'humid'], 
                types: ['uint16', 'uint16'] 
            },
            { 
                name: 'humidConfig', 
                uuid: '0xf000aa2204514000b000000000000000', 
                params: ['config'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'humidMeasPeriod', 
                uuid: '0xf000aa2304514000b000000000000000', 
                params: ['period'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'magnet', 
                uuid: '0xf000aa3104514000b000000000000000', 
                params: ['x', 'y', 'z'], 
                types: ['uint16', 'uint16', 'uint16'] 
            },
            { 
                name: 'magnetConfig', 
                uuid: '0xf000aa3204514000b000000000000000', 
                params: ['config'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'magnetMeasPeriod', 
                uuid: '0xf000aa3304514000b000000000000000', 
                params: ['period'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'baro', 
                uuid: '0xf000aa4104514000b000000000000000', 
                params: ['temp', 'press'], 
                types: ['uint16', 'uint16'] 
            },
            { 
                name: 'baroConfig', 
                uuid: '0xf000aa4204514000b000000000000000', 
                params: ['config'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'baroCalib', 
                uuid: '0xf000aa4304514000b000000000000000', 
                params: ['val1', 'val2', 'val3', 'val4', 'val5', 'val6', 'val7', 'val8'], 
                types: ['uint16', 'uint16', 'uint16', 'uint16', 'uint16', 'uint16', 'uint16', 'uint16'] 
            },
            { 
                name: 'baroMeasPeriod', 
                uuid: '0xf000aa4404514000b000000000000000', 
                params: ['period'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'gyro', 
                uuid: '0xf000aa5104514000b000000000000000', 
                params: ['x', 'y', 'z'], 
                types: ['uint16', 'uint16', 'uint16'] 
            },
            { 
                name: 'gyroConfig', 
                uuid: '0xf000aa5204514000b000000000000000', 
                params: ['config'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'gyroMeasPeriod', 
                uuid: '0xf000aa5304514000b000000000000000', 
                params: ['period'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'test', 
                uuid: '0xf000aa6104514000b000000000000000', 
                params: ['power'], 
                types: ['uint16'] 
            },
            { 
                name: 'testConfig', 
                uuid: '0xf000aa6204514000b000000000000000', 
                params: ['config'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'keyPressState', 
                uuid: '0xffe1', 
                params: ['enable'], 
                types: ['uint8'] 
            }, 
            { 
                name: 'oadImageIdentify', 
                uuid: '0xf000ffc104514000b000000000000000'
            },
            { 
                name: 'oadImageBlock', 
                uuid: '0xf000ffc204514000b000000000000000'
            }, 
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