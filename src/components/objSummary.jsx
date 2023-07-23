import reaction from '../assets/reaction.svg'
import memory from '../assets/memory.svg'
import verbal from '../assets/verbal.svg'
import visual from '../assets/visual.svg'


const objSummary = [
    {
        id: 1,
        icon: reaction,
        title: 'Reaction',
        score: 80,
        outOf: "/ 100",
        color: '#F55',
        backgroundColor: 'hsla(0, 100%, 67%, .07)'
    },
    {
        id: 2,
        icon: memory,
        title: 'Memory',
        score: 92,
        outOf: "/ 100",
        color: '#FFB21E',
        backgroundColor: 'hsla(39, 100%, 56%, .07)'
    },
    {
        id: 3,
        icon: verbal,
        title: 'Verbal',
        score: 61,
        outOf: "/ 100",
        color: '#00BB8F',
        backgroundColor: 'hsla(166, 100%, 37%, .07)'
    },
    {
        id: 4,
        icon: visual,
        title: 'Visual',
        score: 73,
        outOf: "/ 100",
        color: '#1125D6',
        backgroundColor: 'hsla(234, 85%, 45%, .07)'
    }
]

export default objSummary