import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import CastIcon from '@material-ui/icons/Cast';

export default [
    {
        title: undefined, // If extra title is necessary
        pages: [
            {
                title: 'Servers',
                icon: CastIcon,
                children: [
                    {
                        title: '#General',
                        href: '/dashboards/default',
                        avatar: ''
                    },
                    {
                        title: '#Games',
                        href: '/dashboards/analytics',
                        avatar: ''
                    }
                ]
            }
        ]
    },
    {
        title: undefined,
        pages: [
            {
                title: 'Friends',
                icon: PeopleIcon,
                children: [
                    {
                        title: 'dcbrian',
                        href: '/friend/dcbrian',
                        avatar: ''
                    },
                    {
                        title: 'Spongebob',
                        href: '/friend/Spongebob',
                        avatar: ''
                    }
                ]
            }
        ]
    }
];
