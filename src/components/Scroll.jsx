export default function Scroll(props) {
    const scrollToNextSection = () => {
        // Replace 'section2' with the ID of your next section
        const nextSection = document.getElementById(props.id);

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 hover:cursor-pointer" onClick={scrollToNextSection}>
            <div className={`animate-bounce text-${props.color} text-2xl opacity-80`}>
                <span>╲╱</span>
            </div>
        </div>
    )
}

