import Carousel from "../carousel/embla";

const Sentiment = () => {
    const sections = [
        {
            sentiment: 'Slide 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
        },
        {
            sentiment: 'Slide 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
        },
        {
            sentiment: 'Slide 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
        },
    ];

    return (
        <section>
            <Carousel sections={sections} />
        </section>
    );
}

export default Sentiment;
