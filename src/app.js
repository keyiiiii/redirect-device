import ua from 'ua-parser-js';
import queryString from 'query-string';

const getUA = ua();
const parsed = queryString.parse(location.search);
const IOS = 'ios';
const ANDROID = 'android';

if (!(parsed[IOS] && parsed[ANDROID])) {
  return false;
}

const other = {};
Object.keys(parsed)
  .filter((key) => !(key === IOS || key === ANDROID))
  .forEach((key) => other[key] = parsed[key]);

const currentDeviceUA = getUA.os.name;
const { ios, android } = parsed;
const otherQuery = queryString.stringify(other);

switch (currentDeviceUA.toLowerCase()) {
  case IOS:
    location.href = `${ios}&${otherQuery}`;
    break;
  case ANDROID:
    location.href = `${android}&${otherQuery}`;
    break;
}
