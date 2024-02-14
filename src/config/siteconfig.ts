export const links = [
    { link: '/', label: 'Home' },
    { link: '/studiobooking', label: 'Studio Booking' },
    { link: '/community', label: 'Community',
        children: [
            {
                link: '/artists',
                label: 'Artists'
            },
            {
                link: '/clubs',
                label: 'Clubs'
            },
        ]
    },
    { link: '/directory', label: 'Directory' },
    { link: '/resources', label: 'Resources' },
    { link: '/about', label: 'About' },
];