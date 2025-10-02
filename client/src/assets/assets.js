import dummy_profile from './dummy_profile.png'
import logo from './logo.svg'

export const assets = {
    dummy_profile,
    logo,
}

export const users = [
    {
        _id: 'user1',
        name: 'Richard James',
        image: dummy_profile,
        categories: "",
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        isProvider: false
    },
]
