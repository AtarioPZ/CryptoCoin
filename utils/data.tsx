import P1 from '@/public/P1.png'
import P2 from '@/public/P2.png'
import P3 from '@/public/P3.png'
import { PersonType } from './interface';

export const dounutChartData = {
    labels: ['Foundation', 'Crowdsale investors'],
    datasets: [
        {
            label: 'Label',
            data: [20, 80],
            backgroundColor: [
                'rgba(251, 138, 26, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 0,
        },
    ],
};

export const peopleData: PersonType[] = [
    {
        name: "John Smith",
        position: "CEO",
        image: P1,
        feedback: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    }, {
        name: "Elina Williams",
        position: "CTO",
        image: P2,
        feedback: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    }, {
        name: "Matthew Doe",
        position: "CTO",
        image: P3,
        feedback: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    },
]