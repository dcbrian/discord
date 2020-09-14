import LanguageIcon from '@material-ui/icons/Language';
import VpnLockIcon from '@material-ui/icons/VpnLock';

const getIcon = (icon: string) => {
    let res = null;

    switch (icon) {
        case 'LanguageIcon':
            res = LanguageIcon;
            break;

        case 'VpnLockIcon':
            res = VpnLockIcon;
            break;

        default:
            break;
    }
    return res;
};

export default getIcon;
