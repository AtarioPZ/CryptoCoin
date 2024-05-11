"use client"

import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { dounutChartData } from '@/utils/data';

export default function Tokenomics() {
    ChartJS.register(ArcElement, Tooltip);

    return (
        <section className='w-full'>
            <div className="bg-white drop-shadow-lg rounded-lg p-8 h-fit flex flex-col">
                <p className="text-2xl font-semibold">Tokenomics </p>
                <p className="text-lg font-semibold">Initial Distribution </p>
                <div className='relative w-full lg:w-3/5 lg:h-[250px] h-1/3 py-2'>
                    <Doughnut data={dounutChartData} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
                    consequat. Leo etiam nascetur bibendum amet enim sit eget Ieo amet. At metus orci augue fusce eleifend
                    lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam
                    fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum
                    eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet
                    odio nisi eu ac risus.</p>
            </div>
        </section>
    )
}
