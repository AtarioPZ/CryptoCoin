import Image from "next/image";
import { peopleData } from "@/utils/data";
import { PersonType } from "@/utils/interface";

type TeamProp = {
    person: PersonType;
}

const PersonCard = ({ person }: TeamProp) => {
    return (
        <div className="w-full flex lg:flex-row flex-col items-center justify-center p-4 bg-blue-50 bg-opacity-80 rounded-xl">
            <div className="lg:w-[8%] md:w-[15%] w-[30%] object-contain flex flex-col items-center text-center">
                <Image src={person.image} className="rounded-lg" alt="person" />
                <p className="text-xs font-semibold w-full line-clamp-2 pt-1">{person.name}</p>
                <p className="text-xs text-gray-500 w-full line-clamp-4">{person.position}</p>
            </div>
            <div className='text-sm w-[90%] lg:p-4 p-1'>
                {person.feedback}
            </div>
        </div>
    );
}

const Team = () => {
    return (
        <section className="bg-white drop-shadow-lg rounded-lg lg:p-8 p-4 h-fit flex flex-col gap-3">
            <p className="text-2xl font-semibold">Team </p>
            <p>
                Lorem ipsum dolor sit amet consectetur. ld consequat adipiscing arcu nibh. Eget mattis in mi integer sit
                egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
            </p>
            <div className="flex flex-col gap-4">
                {peopleData.map((person, index) => {
                    return <PersonCard key={index} person={person} />;
                })}
            </div>
        </section>
    );
}

export default Team;