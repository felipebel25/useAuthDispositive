import {useEffect, useState} from 'react'

const useAuthDispositive = () => {
    const [data, setData] = useState('');
    const platform = navigator.platform || navigator.oscpu || navigator.userAgentData.platform
    const getOs = () => {
        let userAgent = platform,
          macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
          windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
          androidPlatforms = ['Linux armv8l', 'Linux armv7l'],
          linuxPlatforms = ['Linux x86_64'],
          iPadPlatforms = ['iPad', 'iPod'],
          iphonePlatforms = ['iPhone'],
          os = null;
        
        
        if (macosPlatforms.indexOf(userAgent) !== -1) {
          os = 'Mac OS';
        }
        else if (windowsPlatforms.indexOf(userAgent) !== -1) {
          os = 'Windows';
    
        } else if (androidPlatforms.indexOf(userAgent) !== -1) {
          os = 'Android';
    
        } else if (linuxPlatforms.indexOf(userAgent) !== -1) {
          os = 'Linux';
    
        } else if (iPadPlatforms.indexOf(userAgent) !== -1) {
          os = 'Ipad'
        }
        else if (iphonePlatforms.indexOf(userAgent) !== -1) {
          os = 'iphone'
        }
        return os;
    }

    useEffect(() => {
        setData(getOs())
    }, []);

    return [data , platform]
}

export default useAuthDispositive