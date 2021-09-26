import './style/main.css'

const Preloader = () => {
    return (
        <svg viewBox="0 0 800 600">
        <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="68%" className="text--line2 svgfont">
                TTG
            </text>

        </symbol>

        <g class="g-ants">
            <use className="text-copy" xlinkHref="#s-text"></use>
            <use className="text-copy" xlinkHref="#s-text"></use>
            <use className="text-copy" xlinkHref="#s-text"></use>
            <use className="text-copy" xlinkHref="#s-text"></use>
            <use className="text-copy" xlinkHref="#s-text"></use>
        </g>


    </svg>
    );

}

export default Preloader;