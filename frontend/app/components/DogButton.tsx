const DogButton: React.FC = () => {
    return (
        <a
            href="/dogs"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-yellow-300 hover:bg-yellow-100 hover:dark:border-orange-700 hover:dark:bg-orange-800/30"
            target="_self"
        >
            <h2 className={`mb-3 text-4xl font-semibold`}>
                Dogs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className={`m-0 opacity-50`}>
                Adopt a puppy, give them a new chance at family
            </p>
        </a>
    );
};

export default DogButton;
