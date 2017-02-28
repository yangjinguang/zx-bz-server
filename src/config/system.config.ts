'use strict';
let SysConfig;
if (process.env.NODE_ENV == 'prod') {
    SysConfig = {
        jwtTokenSecret: 'DFDSw67exsdafO.a',
    }
} else {
    SysConfig = {
        jwtTokenSecret: 'DFDSw67exsdafO.a',
    }
}
export {
    SysConfig
}