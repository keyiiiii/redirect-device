import ua from 'ua-parser-js';
import queryString from 'query-string';

const getUA = ua();
const parsed = queryString.parse(location.search);

const currentDeviceUA = getUA.os.name;
const { ios, android } = parsed;

switch (currentDeviceUA.toLowerCase()) {
  case 'ios':
    location.href = ios;
    break;
  case 'android':
    location.href = android;
    break;
}
